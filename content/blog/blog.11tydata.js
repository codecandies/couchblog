module.exports = {
  tags: [
    "blog"
  ],
  "layout": "layouts/blog.njk",
  "permalink": "blog/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
