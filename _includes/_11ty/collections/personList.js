module.exports = function( collection ) {
  let personSet = new Set();
  collection.getAll().forEach( item => {
    ( item.data.persons || [] ).forEach( person => personSet.add( person ));
  });
  return [...personSet];
};
