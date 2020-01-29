const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    },
    // comments: { 
    //   // type: [Schema.Types.ObjectId],
    //   ref: "Comment"
    // },
    likes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

postSchema.virtual("Comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "articleId"
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
