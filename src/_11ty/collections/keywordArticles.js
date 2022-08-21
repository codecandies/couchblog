module.exports = function( collection ) {
  let postByKeyword = {};
  let posts = collection.getFilteredByGlob(["./src/**/*.md","./src/**/*.html"]);
  posts.forEach(function (post) {
    const keywords = post.data.keywords || [];
    keywords.forEach( keyword => {
      if (!postByKeyword[keyword]) {
        postByKeyword[keyword] = [];
      }
      postByKeyword[keyword].push(post);
    });
  });
  return postByKeyword;
};
