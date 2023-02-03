/**
 * Return a long formatted date string for articles
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports = function ( dateStr, locale='de-DE' ) {
  const date = new Date( dateStr );
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat( locale, options ).format( date );
}
