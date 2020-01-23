const express = require("express");
const router = express.Router();

const { signin, login } = require("../controller/user");
// const { resister } = require("../controller/user");
// const { displayProfile } = require("../controller/user");

router.post("/signin", signin);
router.post("/login", login);
// router.post("/resister", resister);
// router.get("/:username", displayProfile);
module.exports = router;
