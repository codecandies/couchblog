module.exports = {
  tags: [
    "blog"
  ],
  "layout": "layouts/blog.njk",
  "permalink": "couchblog/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
