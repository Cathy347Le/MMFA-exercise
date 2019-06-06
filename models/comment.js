const mongoose = require("../db/connection");

//Set up MovieSchema first, then List Schema. MovieSchema is a child of the List Schema,
// so you want to export both in module exports
const CommentSchema = new mongoose.Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String
});

module.exports = {
  Comment: mongoose.model("Comment", CommentSchema)
};
