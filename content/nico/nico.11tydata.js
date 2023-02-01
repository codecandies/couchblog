module.exports = {
  tags: [
    "blog"
  ],
  "layout": "layouts/blog.njk",
  "permalink": "nico/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
