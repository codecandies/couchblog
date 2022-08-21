module.exports = function( collection ) {
  let keywordSet = new Set();
  collection.getAll().forEach( item => {
    ( item.data.keywords || [] ).forEach( keyword => keywordSet.add( keyword ));
  });
  return [...keywordSet];
};
