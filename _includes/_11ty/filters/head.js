/**
 * Return the first or last n items from an array
 * @param {Array} array Array to slice from
 * @param {Integer} n Items to slice, from start or from end if negative
 * @returns {Array}
 */
module.exports = function( array, n ) {
  if( !Array.isArray(array) || array.length === 0) {
    return [];
  }
  if( n < 0 ) {
    return array.slice( n );
  }
  return array.slice( 0, n );
};
