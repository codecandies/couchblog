module.exports = function( collection ) {
  let seriesSet = new Set();
  collection.getAll().forEach( item => {
    ( item.data.series || [] ).forEach( seriesname => seriesSet.add( seriesname ));
  });
  return [...seriesSet];
};
