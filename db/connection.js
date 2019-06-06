const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/comments-api", { useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports = mongoose;
