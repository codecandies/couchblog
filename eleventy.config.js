const markdownIt = require( "markdown-it" );
const markdownItAnchor = require( "markdown-it-anchor" );
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');
const prism = require('markdown-it-prism');
const markDownItAttribution = require('markdown-it-attribution');
const markDownItImplicitFigures = require('markdown-it-implicit-figures');
const markDownItFootnote = require('markdown-it-footnote');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = async function( eleventyConfig ) {
  eleventyConfig.setQuietMode(true);
  const { EleventyHtmlBasePlugin, EleventyRenderPlugin } = await import("@11ty/eleventy");
  const bundlerPlugin = await import("@11ty/eleventy-plugin-bundle");

  // eleventyConfig.setQuietMode(true);
  eleventyConfig.setServerOptions({
    watch: ['_site/css/**/*.css'],
    showAllHosts: true,
  });

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
    "./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
  });

  eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg,jpg}");

  // shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // filters
  eleventyConfig.addFilter('shortDate', require("./_includes/_11ty/filters/shortDate.js"));
  eleventyConfig.addFilter('mediumDate', require("./_includes/_11ty/filters/mediumDate.js"));
  eleventyConfig.addFilter('longDate', require("./_includes/_11ty/filters/longDate.js"));
  eleventyConfig.addFilter('pathDate', require("./_includes/_11ty/filters/pathDate.js"));
  eleventyConfig.addFilter('imgPath', require("./_includes/_11ty/filters/imgPath.js"));
  eleventyConfig.addFilter('w3cDate', require("./_includes/_11ty/filters/w3cDate.js"));
  eleventyConfig.addFilter("head", require("./_includes/_11ty/filters/head.js"));
  eleventyConfig.addFilter("filterTagList", require("./_includes/_11ty/filters/filterTagList.js"));

  // added for welcoments
  const absoluteUrl = "https://couchblog.de";
  eleventyConfig.addFilter("absoluteUrl", (path) => `${absoluteUrl}${path}`);
  eleventyConfig.addFilter("objectValues", (object) =>
    object ? Object.values(object) : []
  );
  eleventyConfig.addFilter("whereUnset", (array, key) =>
    array.filter((item) => !item[key] || item[key] === "")
  );
  eleventyConfig.addFilter("where", (array, key, value) =>
    array.filter((item) => item[key] === value)
  );
  eleventyConfig.addFilter("interpolate", (a, b) => `${a}${b}`);
  eleventyConfig.addFilter("sortBy", (array, key) =>
    array.slice().sort((a, b) => a[key] - b[key])
  );

  // collections
  eleventyConfig.addCollection("tagList", require("./_includes/_11ty/collections/tagList.js"));
  eleventyConfig.addCollection("keywordList", require("./_includes/_11ty/collections/keywordList.js"));
  eleventyConfig.addCollection("seriesList", require("./_includes/_11ty/collections/seriesList.js"));
  eleventyConfig.addCollection("personList", require("./_includes/_11ty/collections/personList.js"));
  eleventyConfig.addCollection("postsByKeywords", require("./_includes/_11ty/collections/keywordArticles.js"));
  eleventyConfig.addCollection("postsByPersons", require("./_includes/_11ty/collections/personArticles.js"));
  eleventyConfig.addCollection("postsBySeries", require("./_includes/_11ty/collections/seriesArticles.js"));

  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(require("./eleventy.config.images.js"));
  eleventyConfig.addPlugin(bundlerPlugin.default);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addFilter("plusify", function(path) {
    return path.replaceAll(' ', '+');
  });

  // markdown config
  let markdownItOptions = {
    html: true,
    linkify: true,
    typographer: true
  };
  let markdownLib = markdownIt(markdownItOptions)
    .use(markdownItContainer, 'warning' )
    .use(markdownItContainer, 'tip' )
    .use(markdownItContainer, 'special' )
    .use(markdownItContainer, 'read' )
    .use(markdownItContainer, 'author' )
    .use(markdownItContainer, 'info' )
    .use(markDownItFootnote)
    .use(markdownItAttrs, {
      leftDelimiter: '{:',
      rightDelimiter: '}',
      allowedAttributes: ['id', 'class', /^data\-.*$/, 'loading', 'lang'],
    })
    .use(prism, {
      defaultLanguageForUnknown: 'html',
      defaultLanguageForUnspecified: 'js'
    })
    .use( markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        placement: 'before',
        safariReaderFix: true
      })
    })
    .use( markDownItAttribution, {
      marker: '—',
      classNameContainer: 'quotation'
    })
    .use( markDownItImplicitFigures, {figcaption: true} );

  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  eleventyConfig.addFilter("markdownify", (value) =>
    markdownLib.render(value)
  );

  return {
    templateFormats: ["html", "njk", "md", "jpg", "jpeg", "png"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplatseEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "content",         // default: "."
      includes: "../_includes",  // default: "_includes", relative to input path
      data: "../_data",          // default: "_data", relative to input path
      output: "_site"
    },
    pathPrefix: "/",
  };
}
