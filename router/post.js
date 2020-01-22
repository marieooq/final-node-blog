const express = require("express");
const router = express.Router();

const { postArticle } = require("../controller/post");

router.get("/", getHomePage);
route.get("/:articleId", displayArticle);
router.post("/post", postArticle);

module.exports = router;
