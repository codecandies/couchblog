module.exports = {
  tags: [
    "blog"
  ],
  "layout": "layouts/blog.njk",
  "permalink": "webpropaganda/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
