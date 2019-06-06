const mongoose = require("../db/connection");

const CommentSchema = new mongoose.Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String
});

module.exports = mongoose.model("Comment", CommentSchema);
