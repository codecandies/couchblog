const { DateTime } = require('luxon');

/**
 * Return a long formatted date string for articles
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports = function ( dateStr, locale='de-DE' ) {
  const date = DateTime.fromISO(dateStr, { zone: 'Europe/Berlin' });
  return date.setLocale(locale).toFormat('cccc, dd. LLLL yyyy');
}
