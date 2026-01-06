/**
 * Return a long formatted date and time string for comments
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports = function ( dateStr, locale='de-DE' ) {
  const date = new Date( dateStr );
  const options = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" };
  return new Intl.DateTimeFormat( locale, options ).format( date );
}
