const filterTagList = require("../filters/filterTagList");
module.exports = function(collection) {
  let tagSet = new Set();
  collection.getAll().forEach( item => {
    ( item.data.tags || [] ).forEach( tag => tagSet.add(tag) );
  });

  return filterTagList([...tagSet]);
}
