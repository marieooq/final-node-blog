const express = require("express");
const router = express.Router();

const { getAllComments, postComment  } = require("../controller/comment");

router.get("/comments", getAllComments);

router.post("/postComment", postComment);

module.exports = router;
