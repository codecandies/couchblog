module.exports = {
  tags: [
    "blog",
  ],
  series: [
    "2007 – 2013"
  ],
  "layout": "layouts/blog.njk",
  "permalink": "codecandies/{{ date | pathDate }}/{{ title | slugify }}/index.html"
};
