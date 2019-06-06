const Comment = require("../models/comment");

const commentData = require("./comment10.json");

Comment.deleteMany({}).then(() => {
  Comment.create(commentData)
    .then(comments => {
      console.log(comments);
    })
    .catch(err => {
      console.log(err);
    });
});
