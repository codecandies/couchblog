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

module.exports = function( eleventyConfig ) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
  eleventyConfig.addPassthroughCopy({'src/_assets/fonts/': 'css/fonts'});
  eleventyConfig.addPassthroughCopy({'src/_assets/img/': 'img'});
  eleventyConfig.addPassthroughCopy({'src/_assets/js/': 'js'});

  // filters
  eleventyConfig.addFilter('shortDate', require("./src/_11ty/filters/shortDate.js"));
  eleventyConfig.addFilter('mediumDate', require("./src/_11ty/filters/mediumDate.js"));
  eleventyConfig.addFilter('longDate', require("./src/_11ty/filters/longDate.js"));
  eleventyConfig.addFilter('pathDate', require("./src/_11ty/filters/pathDate.js"));
  eleventyConfig.addFilter("head", require("./src/_11ty/filters/head.js"));
  eleventyConfig.addFilter("filterTagList", require("./src/_11ty/filters/filterTagList.js"));

  // collections
  eleventyConfig.addCollection("tagList", require("./src/_11ty/collections/tagList.js"));
  eleventyConfig.addCollection("keywordList", require("./src/_11ty/collections/keywordList.js"));
  eleventyConfig.addCollection("personList", require("./src/_11ty/collections/personList.js"));
  eleventyConfig.addCollection("postsByKeywords", require("./src/_11ty/collections/keyWordArticles.js"));
  eleventyConfig.addCollection("postsByPersons", require("./src/_11ty/collections/personArticles.js"));

  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

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

  return {
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplatseEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site',
      data: "_data",
      includes: '_includes',
      layouts: '_includes/layouts'
    }
  };
}
