const express = require("express");
const app = express();
const Comment = require("./models/comment");

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.get("/api", (req, res) => {
  Comment.find({}).then(comments => {
    res.json(comments).catch(err => {
      console.log(err);
    });
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
