const { DateTime } = require('luxon');

/**
 * return a path segment from a date string, ie. 2010/07/01
 * @param {String} dateStr
 * @returns {String}
 */
module.exports = function( dateStr ) {
  const date = DateTime.fromISO(dateStr, { zone: 'Europe/Berlin' });
  return date.toFormat('yyyy/MM/dd');
}
