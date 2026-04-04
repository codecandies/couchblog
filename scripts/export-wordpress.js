#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const pathDate = require("../_includes/_11ty/filters/pathDate");

const metadata = require("../_data/metadata.json");
const PAGE_CONTENT_SEGMENT = `${path.sep}seiten${path.sep}`;

const markdownIt = new MarkdownIt({
  html: true,
  linkify: true
});

function parseArgs(argv = process.argv.slice(2)) {
  const defaults = {
    input: "content",
    output: "wordpress-export.xml",
    siteUrl: metadata.url,
    title: metadata.title,
    language: metadata.language || "de-DE",
    author: metadata.author?.name || "admin",
    authorEmail: metadata.author?.email || ""
  };

  for (const arg of argv) {
    if (!arg.startsWith("--")) continue;
    const [key, ...rest] = arg.slice(2).split("=");
    const value = rest.join("=");
    if (!value) continue;

    if (key === "input") defaults.input = value;
    if (key === "output") defaults.output = value;
    if (key === "site-url") defaults.siteUrl = value;
    if (key === "title") defaults.title = value;
    if (key === "language") defaults.language = value;
    if (key === "author") defaults.author = value;
    if (key === "author-email") defaults.authorEmail = value;
  }

  return defaults;
}

function xmlEscape(text = "") {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toCData(text = "") {
  return `<![CDATA[${String(text).replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;
}

function slugify(text = "") {
  return String(text)
    .toLowerCase()
    .replaceAll("ß", "ss")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toWpDate(value, useUtc = false) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const year = useUtc ? date.getUTCFullYear() : date.getFullYear();
  const month = String((useUtc ? date.getUTCMonth() : date.getMonth()) + 1).padStart(2, "0");
  const day = String(useUtc ? date.getUTCDate() : date.getDate()).padStart(2, "0");
  const hours = String(useUtc ? date.getUTCHours() : date.getHours()).padStart(2, "0");
  const minutes = String(useUtc ? date.getUTCMinutes() : date.getMinutes()).padStart(2, "0");
  const seconds = String(useUtc ? date.getUTCSeconds() : date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(entryPath));
      continue;
    }
    if (entry.isFile() && entryPath.endsWith(".md")) {
      files.push(entryPath);
    }
  }
  return files;
}

function deriveSlug(filePath, permalink) {
  if (permalink) {
    const parts = permalink.split("/").filter(Boolean);
    if (parts.length > 0) return slugify(parts[parts.length - 1]);
  }

  const dirName = path.basename(path.dirname(filePath));
  if (dirName !== "content") return slugify(dirName);
  return slugify(path.basename(filePath, ".md"));
}

function buildComputedPermalink(filePath, title, date, contentRoot) {
  const relativePath = path.relative(contentRoot, filePath);
  const segments = relativePath.split(path.sep);
  const section = segments[0];
  if (!section) return "";

  if (["blog", "nico", "codecandies", "couchblog", "webpropaganda"].includes(section) && date && title) {
    return `/${section}/${pathDate(String(date))}/${slugify(title)}/`;
  }

  if (section === "seiten") {
    const stem = path.basename(filePath, path.extname(filePath)) === "index"
      ? path.dirname(relativePath)
      : relativePath.slice(0, -path.extname(relativePath).length);
    return `/${stem.replaceAll(path.sep, "/")}/`;
  }

  return "";
}

function resolvePermalink(post) {
  if (post.permalink) return post.permalink;
  return buildComputedPermalink(post.filePath, post.title, post.date, post.contentRoot);
}

function toAbsoluteUrl(urlPath, siteUrl) {
  if (!urlPath) return siteUrl;
  try {
    return new URL(urlPath, siteUrl).toString();
  } catch {
    return siteUrl;
  }
}

function getPostType(filePath) {
  return filePath.includes(PAGE_CONTENT_SEGMENT) ? "page" : "post";
}

function normalizeTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.filter(Boolean).map((tag) => String(tag).trim()).filter(Boolean);
  return [String(tags).trim()].filter(Boolean);
}

function buildTaxonomyTerms(post) {
  const terms = [];

  for (const category of normalizeTags(post.categories)) {
    terms.push({
      domain: "category",
      nicename: slugify(category),
      name: category
    });
  }

  for (const keyword of normalizeTags(post.keywords)) {
    terms.push({
      domain: "post_tag",
      nicename: slugify(keyword),
      name: keyword
    });
  }

  for (const person of normalizeTags(post.person || post.persons)) {
    terms.push({
      domain: "person",
      nicename: slugify(person),
      name: person
    });
  }

  for (const series of normalizeTags(post.series)) {
    terms.push({
      domain: "series",
      nicename: slugify(series),
      name: series
    });
  }

  return terms;
}

function getHeaderImageUrl(post, permalink) {
  if (!post.headerImage?.src) return "";
  if (post.type === "page") {
    return toAbsoluteUrl(`/img/${post.headerImage.src}`, post.siteUrl);
  }

  const yearMatch = permalink.match(/\/\d{4}\//);
  if (yearMatch) {
    const yearPath = permalink.slice(0, yearMatch.index + yearMatch[0].length);
    return toAbsoluteUrl(`${yearPath}${post.headerImage.src}`, post.siteUrl);
  }

  const fallbackDir = permalink.endsWith("/") ? permalink : `${permalink}/`;
  return toAbsoluteUrl(`${fallbackDir}${post.headerImage.src}`, post.siteUrl);
}

function getPostThumbnailUrl(post, permalink) {
  if (post.articleImage?.src) {
    return toAbsoluteUrl(`/images/${post.articleImage.src}`, post.siteUrl);
  }
  return getHeaderImageUrl(post, permalink);
}

function buildWxrItem(post, index) {
  const resolvedPermalink = resolvePermalink(post);
  const link = toAbsoluteUrl(resolvedPermalink, post.siteUrl);
  const slug = deriveSlug(post.filePath, resolvedPermalink);
  const postDate = toWpDate(post.date || new Date().toISOString());
  const postDateGmt = toWpDate(post.date || new Date().toISOString(), true);
  const postStatus = post.draft ? "draft" : "publish";
  const taxonomyTerms = buildTaxonomyTerms(post)
    .map((term) => {
      return `    <category domain="${xmlEscape(term.domain)}" nicename="${xmlEscape(term.nicename)}">${toCData(term.name)}</category>`;
    })
    .join("\n");
  const postThumbnail = getPostThumbnailUrl(post, resolvedPermalink);
  const postMeta = postThumbnail
    ? `
    <wp:postmeta>
      <wp:meta_key>${toCData("post_thumbnail")}</wp:meta_key>
      <wp:meta_value>${toCData(postThumbnail)}</wp:meta_value>
    </wp:postmeta>`
    : "";

  return `<item>
    <title>${toCData(post.title || slug || "Untitled")}</title>
    <link>${xmlEscape(link)}</link>
    <pubDate>${xmlEscape(new Date(post.date || new Date().toISOString()).toUTCString())}</pubDate>
    <dc:creator>${toCData(post.author)}</dc:creator>
    <guid isPermaLink="false">${xmlEscape(link)}</guid>
    <description></description>
    <content:encoded>${toCData(post.contentHtml)}</content:encoded>
    <excerpt:encoded>${toCData(post.description || "")}</excerpt:encoded>
    <wp:post_id>${index + 1}</wp:post_id>
    <wp:post_date>${xmlEscape(postDate)}</wp:post_date>
    <wp:post_date_gmt>${xmlEscape(postDateGmt)}</wp:post_date_gmt>
    <wp:comment_status>open</wp:comment_status>
    <wp:ping_status>open</wp:ping_status>
    <wp:post_name>${xmlEscape(slug)}</wp:post_name>
    <wp:status>${xmlEscape(postStatus)}</wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:menu_order>0</wp:menu_order>
    <wp:post_type>${xmlEscape(post.type)}</wp:post_type>
    <wp:post_password></wp:post_password>
    <wp:is_sticky>0</wp:is_sticky>${taxonomyTerms ? `\n${taxonomyTerms}` : ""}${postMeta}
  </item>`;
}

function buildWxrDocument(posts, config) {
  const now = new Date();
  const items = posts.map((post, index) => buildWxrItem(post, index)).join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/">
  <channel>
    <title>${xmlEscape(config.title)}</title>
    <link>${xmlEscape(config.siteUrl)}</link>
    <description></description>
    <pubDate>${xmlEscape(now.toUTCString())}</pubDate>
    <language>${xmlEscape(config.language)}</language>
    <wp:wxr_version>1.2</wp:wxr_version>
    <wp:base_site_url>${xmlEscape(config.siteUrl)}</wp:base_site_url>
    <wp:base_blog_url>${xmlEscape(config.siteUrl)}</wp:base_blog_url>
    <wp:author>
      <wp:author_id>1</wp:author_id>
      <wp:author_login>${toCData(config.author)}</wp:author_login>
      <wp:author_email>${toCData(config.authorEmail || "")}</wp:author_email>
      <wp:author_display_name>${toCData(config.author)}</wp:author_display_name>
      <wp:author_first_name>${toCData("")}</wp:author_first_name>
      <wp:author_last_name>${toCData("")}</wp:author_last_name>
    </wp:author>
${items}
  </channel>
</rss>
`;
}

function exportWordpress(config) {
  const inputPath = path.resolve(config.input);
  const outputPath = path.resolve(config.output);
  const files = listMarkdownFiles(inputPath).sort();

  const posts = files.map((filePath) => {
    const source = fs.readFileSync(filePath, "utf8");
    const parsed = matter(source);
    const body = parsed.content?.trim() || "";
    return {
      filePath,
      title: parsed.data.title,
      date: parsed.data.date,
      permalink: parsed.data.permalink,
      categories: parsed.data.tags,
      keywords: parsed.data.keywords,
      person: parsed.data.person,
      persons: parsed.data.persons,
      series: parsed.data.series,
      headerImage: parsed.data.headerImage,
      articleImage: parsed.data.articleImage,
      draft: Boolean(parsed.data.draft),
      author: config.author,
      type: getPostType(filePath),
      siteUrl: config.siteUrl,
      contentRoot: inputPath,
      contentHtml: markdownIt.render(body)
    };
  });

  const document = buildWxrDocument(posts, config);
  fs.writeFileSync(outputPath, document, "utf8");

  return { outputPath, count: posts.length };
}

if (require.main === module) {
  const config = parseArgs();
  const result = exportWordpress(config);
  console.log(`Exported ${result.count} markdown files to ${result.outputPath}`);
}

module.exports = {
  parseArgs,
  xmlEscape,
  toCData,
  slugify,
  toWpDate,
  deriveSlug,
  resolvePermalink,
  buildWxrItem,
  buildWxrDocument,
  exportWordpress
};
