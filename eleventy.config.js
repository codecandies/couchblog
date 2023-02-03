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
const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function( eleventyConfig ) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setServerOptions({
    watch: ['_site/css/**/*.css'],
    showAllHosts: true,
  });

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
    "./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
  });

  eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  // shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // filters
  eleventyConfig.addFilter('shortDate', require("./src/_11ty/filters/shortDate.js"));
  eleventyConfig.addFilter('mediumDate', require("./src/_11ty/filters/mediumDate.js"));
  eleventyConfig.addFilter('longDate', require("./src/_11ty/filters/longDate.js"));
  eleventyConfig.addFilter('pathDate', require("./src/_11ty/filters/pathDate.js"));
  eleventyConfig.addFilter('w3cDate', require("./src/_11ty/filters/w3cDate.js"));
  eleventyConfig.addFilter("head", require("./src/_11ty/filters/head.js"));
  eleventyConfig.addFilter("filterTagList", require("./src/_11ty/filters/filterTagList.js"));

  // collections
  eleventyConfig.addCollection("tagList", require("./src/_11ty/collections/tagList.js"));
  eleventyConfig.addCollection("keywordList", require("./src/_11ty/collections/keywordList.js"));
  eleventyConfig.addCollection("seriesList", require("./src/_11ty/collections/seriesList.js"));
  eleventyConfig.addCollection("personList", require("./src/_11ty/collections/personList.js"));
  eleventyConfig.addCollection("postsByKeywords", require("./src/_11ty/collections/keywordArticles.js"));
  eleventyConfig.addCollection("postsByPersons", require("./src/_11ty/collections/personArticles.js"));
  eleventyConfig.addCollection("postsBySeries", require("./src/_11ty/collections/seriesArticles.js"));

  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(require("./eleventy.config.images.js"));

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
      permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true })
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

  return {
    templateFormats: ["html", "njk", "md"],
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
