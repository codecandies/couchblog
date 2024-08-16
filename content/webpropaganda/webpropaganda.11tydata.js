module.exports = {
  tags: [
    "blog",
  ],
  series: [
    "2004 – 2007",
  ],
  "layout": "layouts/blog.njk",
  "permalink": "webpropaganda/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
