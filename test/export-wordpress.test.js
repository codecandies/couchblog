const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  slugify,
  deriveSlug,
  resolvePermalink,
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

test("resolvePermalink computes eleventy-style path when permalink is missing", () => {
  const contentRoot = "/tmp/content";
  const permalink = resolvePermalink({
    filePath: `${contentRoot}/blog/2026/2026-03-19 Brille.md`,
    title: "Brille",
    date: "2026-03-19T12:00:00+01:00",
    contentRoot
  });
  assert.equal(permalink, "/blog/2026/03/19/brille/");
});

test("exportWordpress creates a valid WXR with categories, taxonomies and thumbnail", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "wp-export-test-"));
  const previousCwd = process.cwd();
  try {
    const inputDir = path.join(tempDir, "content");
    process.chdir(tempDir);
    const blogDir = path.join(inputDir, "blog/2024/01/15/test-post");
    const pageDir = path.join(inputDir, "seiten/about");
    fs.mkdirSync(blogDir, { recursive: true });
    fs.mkdirSync(pageDir, { recursive: true });

    fs.writeFileSync(
      path.join(blogDir, "index.md"),
      `---
title: "Test Post"
date: "2024-01-15T10:20:30+01:00"
tags:
  - "Gesehen"
keywords:
  - "Podcast"
persons:
  - "Walter Hill"
series:
  - "70s Rewatch"
headerImage:
  src: "header.jpg"
  alt: "Header Alt"
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
    assert.match(xml, /<link>https:\/\/example\.com\/blog\/2024\/01\/15\/test-post\/<\/link>/);
    assert.match(xml, /<category domain="category" nicename="gesehen"><!\[CDATA\[Gesehen\]\]><\/category>/);
    assert.match(xml, /<category domain="post_tag" nicename="podcast"><!\[CDATA\[Podcast\]\]><\/category>/);
    assert.match(xml, /<category domain="person" nicename="walter-hill"><!\[CDATA\[Walter Hill\]\]><\/category>/);
    assert.match(xml, /<category domain="series" nicename="70s-rewatch"><!\[CDATA\[70s Rewatch\]\]><\/category>/);
    assert.match(xml, /<wp:meta_key><!\[CDATA\[post_thumbnail\]\]><\/wp:meta_key>/);
    assert.match(xml, /<wp:meta_value><!\[CDATA\[https:\/\/example\.com\/blog\/2024\/header\.jpg\]\]><\/wp:meta_value>/);
    assert.match(xml, /<content:encoded><!\[CDATA\[<p>Hallo <strong>Welt<\/strong>\.<\/p>\n\]\]><\/content:encoded>/);
  } finally {
    process.chdir(previousCwd);
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});
