const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true,
      unique: true
    },
    featuredImage: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("User", postSchema);
module.exports = Post;
