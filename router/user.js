const express = require("express");
const router = express.Router();

const { signup } = require("../controller/user");

router.post("/user", signup);

module.exports = router;
