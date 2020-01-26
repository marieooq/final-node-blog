const Post = require("../model/post");
// const mongoose = require("../db/db");

exports.getAllPosts = async (req, res) => {
  try {
    const articles = await Post.find();
    return res.status(201).send({ articles });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.getPost = async (req, res) => {
  try {
    const article = await Post.findById({ _id: req.params.articleId });
    return res.status(201).send({ article });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.getPostsByUser = async (req, res) => {
  try {
    const articles = await Post.find( { userId: req.params.userId } );
    return res.status(201).send({ articles });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.getPostsByCategory = async (req, res) => {
  console.log("params = ", req.params.category);
  try {
    const articles = await Post.find( { category: req.params.category } );
    return res.status(201).send({ articles });
  } catch (e) {
    console.log("what is e? ",e)
    return res.status(400).send(e);
  }
};

exports.editPost = async (req, res) => {
  try {
    const article = await Post.findByIdAndUpdate(
      { _id: req.params.articleId },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          userId: "123",
          featuredImage: req.body.image,
          category: req.body.category
        }
      }
    );
    return res.status(201).send({ article });
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const article = await Post.findByIdAndDelete({ _id: req.parms.articleId });

    return res.status(201).send({ article });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.post = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    userId: "002",
    featuredImage: req.body.image,
    category: req.body.category
  });
  try {
    if (!post) {
      return res.send("fail to post");
    }
    await post.save();
    return res.status(201).send({ post });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.getHomePage = (req, res, next) => {
  res.render("home");
};

exports.displayArticle = async (req, res) => {
  const post = new Post({
    title: "Test",
    content: "test test test",
    userId: "123",
    featuredImage: "abc.img",
    category: "technology"
  });
  try {
    if (!post) {
      return res.send("fail to post");
    }
    await post.save();
    return res.status(201).send({ post });
  } catch (e) {
    return res.status(400).send(e);
  }
};
