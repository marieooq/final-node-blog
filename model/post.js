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
      type: String
    },
    featuredImage: {
      type: String
    },
    category: {
      type: String,
      required: true
    }
    // comments: {
    //   type: [Schema.Types.ObjectId],
    //   ref: "Comment"
    // }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
