const { DateTime } = require('luxon');

/**
 * Return a medium formatted date string for lists
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports =  ( dateStr, locale='de-DE') => {
  const date = DateTime.fromISO(dateStr, { zone: 'Europe/Berlin' });
  return date.setLocale(locale).toFormat('MMM yyyy');
};
