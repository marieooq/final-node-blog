const express = require('express');
const router = express.Router();

const { getAllUsers, getUser, signin, signup } = require('../controller/user');

router.get('/users', getAllUsers);
router.get('/user/:userId', getUser);

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;
