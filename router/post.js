const express = require("express");
const router = express.Router();

const { getAllPosts } = require("../controller/post");
const { getPost } = require("../controller/post");
const { getPostsByUser } = require("../controller/post");
const { getPostsByCategory } = require("../controller/post");
const { editPost } = require("../controller/post");
const { deletePost } = require("../controller/post");
const { post } = require("../controller/post");

router.get("/", getAllPosts);

router.get("/:articleId", getPost);

router.get("/postByUser/:userId", getPostsByUser);

router.get("/postByCategory/:category", getPostsByCategory);

router.patch("/edit/:articleId", editPost);

router.delete("/delete/:articleId", deletePost);

router.post("/post", post);

module.exports = router;
