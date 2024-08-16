module.exports = {
  tags: [
    "blog",
  ],
  series: [
    "2013 – 2016",
  ],
  "layout": "layouts/blog.njk",
  "permalink": "nico/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
