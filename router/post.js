const express = require("express");
const router = express.Router();

const { postArticle } = require("../controller/post");

router.post("/post", postArticle);

module.exports = router;
