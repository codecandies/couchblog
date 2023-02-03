/**
 * return a path segment from a date string, ie. 2010/07/01
 * @param {String} dateStr
 * @returns {String}
 */
module.exports = function( dateStr ) {
  const date = new Date( dateStr );
  const day = date.toLocaleString( 'en-US', {day: '2-digit'} );
  const month = date.toLocaleString( 'en-US', {month: '2-digit'} );
  const year = date.toLocaleString( 'en-US', {year: 'numeric'} );
  return `${year}/${month}/${day}`;
}
