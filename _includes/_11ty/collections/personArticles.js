module.exports = function( collection ) {
  let postByPerson = {};
  let posts = collection.getFilteredByGlob(["./content/**/*.md","./content/**/*.html"]);
  posts.forEach(function (post) {
    const persons = post.data.persons || [];
    persons.forEach( person => {
      if (!postByPerson[person]) {
        postByPerson[person] = [];
      }
      postByPerson[person].push(post);
    });
  });
  return postByPerson;
};
