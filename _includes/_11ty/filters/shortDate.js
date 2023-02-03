/**
 * Return a short formatted date string w/o dots for lists, ie 7 Jan
 * @param {String} dateStr string representation of a date
 * @param {String} ['de-DE'] locale ISO string of locale to use
 * @returns
 */
module.exports = ( dateStr, locale='de-DE' ) => {
  const date = new Date( dateStr );
  const options = { year: '2-digit', month: 'short', day: 'numeric'};
  return new Intl.DateTimeFormat( 'de-DE', options ).format( date ).replaceAll( '.', '' );
}
