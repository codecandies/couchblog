module.exports = {
  tags: [
    "blog"
  ],
  "layout": "layouts/blog.njk",
  "permalink": "codecandies/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
