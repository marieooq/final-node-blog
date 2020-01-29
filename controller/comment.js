const Comment = require("../model/comment");
const Post = require("../model/post");

// const mongoose = require("../db/db");

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(201).send({ comments });
  } catch (e) {
    console.log("getAllComments - Error = ", e);
    return res.status(400).send(e);
  }
};

exports.postComment = async (req, res) => {
  const post = new Comment({
    content: req.body.content,
    articleId: req.body.articleId,
    userId: req.body.userId
  });

  try {
    if (!post) {
      return res.send("fail to post");
    }
    await Post.findByIdAndUpdate(
      { _id: req.body.articleId },
      { $addToSet: { comments: post } }
    );
    await post.save();
    return res.status(201).send({ post });
  } catch (e) {
    return res.status(400).send(e);
  }
};
