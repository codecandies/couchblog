module.exports = function( collection ) {
  let postBySeries = {};
  let posts = collection.getFilteredByGlob(["./content/**/*.md","./content/**/*.html"]);
  posts.forEach(function (post) {
    const names = post.data.series || [];
    names.forEach( seriesname => {
      if (!postBySeries[seriesname]) {
        postBySeries[seriesname] = [];
      }
      postBySeries[seriesname].push(post);
    });
  });
  return postBySeries;
};
