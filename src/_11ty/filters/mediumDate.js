/**
 * Return a medium formatted date string for lists
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports =  ( dateStr, locale='de-DE') => {
  const date = new Date( dateStr );
  const options = { year: 'numeric', month: 'short' };
  return new Intl.DateTimeFormat( locale, options ).format(date);
};
