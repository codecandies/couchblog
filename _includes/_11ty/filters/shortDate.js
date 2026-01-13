const { DateTime } = require('luxon');

/**
 * Return a short formatted date string w/o dots for lists, ie 7 Jan
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports = ( dateStr, locale='de-DE' ) => {
  const date = DateTime.fromISO(dateStr, { zone: 'Europe/Berlin' });
  return date.setLocale(locale).toFormat('dd MMM yy').replace('.', '');
}
