module.exports = {
  tags: [
    "blog",
  ],
  series: [
    "2002 – 2004",
  ],
  "layout": "layouts/blog.njk",
  "permalink": "couchblog/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
