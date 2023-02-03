/**
 * Return a w3c date (yyyy-LL-dd)
 * @param {String} dateStr string representation of a date
 * @returns
 */
module.exports = ( dateStr ) => {
  const date = new Date( dateStr );
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC'};
  return new Intl.DateTimeFormat( 'fr-CA', options ).format( date );
}
