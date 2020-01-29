const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
  content: { type: String, required: true },
  articleId: { type: String, required: true },
  userId: { type: String, required: true }
});

module.exports = mongoose.model("Comment", commentSchema);
