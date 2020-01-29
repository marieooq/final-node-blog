const express = require("express");
const router = express.Router();

const { getAllComments, 
    getAllCommentsById, 
    postComment  
} = require("../controller/comment");

router.get("/comments", getAllComments);
router.get("/comments/:id", getAllCommentsById);

router.post("/postComment", postComment);

module.exports = router;
