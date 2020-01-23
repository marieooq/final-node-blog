const express = require("express");
const router = express.Router();

const { signin, login } = require("../controller/user");
// const { resister } = require("../controller/user");
// const { displayProfile } = require("../controller/user");

router.post("/signup", signup);
router.post("/signin", singin);
// router.post("/resister", resister);
// router.get("/:username", displayProfile);
module.exports = router;
