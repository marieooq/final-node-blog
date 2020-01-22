const Post = require("../model/post");

exports.postArticle = async (req, res) => {
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
