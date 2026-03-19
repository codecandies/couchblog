const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  slugify,
  deriveSlug,
  exportWordpress
} = require("../scripts/export-wordpress");

test("slugify normalizes german text and spaces", () => {
  assert.equal(slugify("Straße der Verdammten"), "strasse-der-verdammten");
});

test("deriveSlug prefers permalink over filesystem path", () => {
  const filePath = "/tmp/content/blog/2024/01/test-post/index.md";
  const permalink = "/blog/2024/01/15/special-slug/";
  assert.equal(deriveSlug(filePath, permalink), "special-slug");
});

test("exportWordpress creates a valid WXR with tags and page detection", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "wp-export-test-"));
  try {
    const inputDir = path.join(tempDir, "content");
    const blogDir = path.join(inputDir, "blog/2024/01/15/test-post");
    const pageDir = path.join(inputDir, "seiten/about");
    fs.mkdirSync(blogDir, { recursive: true });
    fs.mkdirSync(pageDir, { recursive: true });

    fs.writeFileSync(
      path.join(blogDir, "index.md"),
      `---
title: "Test Post"
date: "2024-01-15T10:20:30+01:00"
permalink: "/blog/2024/01/15/test-post/"
tags:
  - "Gehört"
  - "Podcast"
---

Hallo **Welt**.
`,
      "utf8"
    );

    fs.writeFileSync(
      path.join(pageDir, "index.md"),
      `---
title: "About"
date: "2024-01-01"
---

Dies ist eine Seite.
`,
      "utf8"
    );

    const outputPath = path.join(tempDir, "export.xml");
    const result = exportWordpress({
      input: inputDir,
      output: outputPath,
      siteUrl: "https://example.com",
      title: "Example Blog",
      language: "de-DE",
      author: "Nico",
      authorEmail: "nico@example.com"
    });

    assert.equal(result.count, 2);
    const xml = fs.readFileSync(outputPath, "utf8");
    assert.match(xml, /<wp:wxr_version>1\.2<\/wp:wxr_version>/);
    assert.match(xml, /<wp:author_email><!\[CDATA\[nico@example\.com\]\]><\/wp:author_email>/);
    assert.match(xml, /<wp:post_type>post<\/wp:post_type>/);
    assert.match(xml, /<wp:post_type>page<\/wp:post_type>/);
    assert.match(xml, /<category domain="post_tag" nicename="gehort"><!\[CDATA\[Gehört\]\]><\/category>/);
    assert.match(xml, /<content:encoded><!\[CDATA\[<p>Hallo <strong>Welt<\/strong>\.<\/p>\n\]\]><\/content:encoded>/);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});
