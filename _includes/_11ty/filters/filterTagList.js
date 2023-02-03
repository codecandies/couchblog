/**
 * Filter a tag list from an array of tags
 * @param {Array} tags Array of tags to filter
 * @returns {Array}
 */
module.exports = function (tags) {
  const tagsToFilter = ["all", "general", "post", "posts", "blog"];
  return (tags || []).filter(tag => tagsToFilter.indexOf(tag) === -1);
};
