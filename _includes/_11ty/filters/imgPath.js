/**
 * return a path segment from the page url, ie. blog/2023/
 * @param {String} url
 * @returns {String}
 */
module.exports = function(url) {
  const yearRegex = /\b\d{4}\b/;
  // Find the match using the regular expression
  const match = url.match(yearRegex);

  // If a match is found, return the part of the string before the year
  if (match) {
      const indexOfYear = url.indexOf(match[0]);
      return url.substring(0, indexOfYear + 5);
  }

  // If no match is found, return the original string
  return url;
}
