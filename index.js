const express = require("express");
const app = express();
const Comment = require("./models/comment");

app.get("/", function(req, res) {
  Comment.find({}).then(function(comments) {
    res.json(comments).catch(function(err) {
      console.log(err);
    });
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
