const mongoose = require("mongoose");
const User = require("../model/user");

exports.signup = async (req, res) => {
  const user = new User({ name: "test", email: "test2@test.com" });
  try {
    if (!user) {
      return res.send("Signup was failed");
    }
    await user.save();
    return res.status(201).send({ user });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.login = async (req, res) => {
  const user = await User.findOne({
    // email: req.body.email,
    // password: req.body.password
    name: req.body.name
  });

  if (user) {
    // res.redirect("/");
    res.send({ user: user });
    // console.log(user);
  } else {
    res.send({
      msg: "User doesn't exsist"
    });
  }
};
