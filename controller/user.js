const mongoose = require("mongoose");
const User = require("../model/user");

exports.signup = async (req, res) => {
  const user = new User(req.body);
  try {
    if (!user) {
      return res.send("signin was failed");
    }
    await user.save();
    return res.status(201).send({ user });
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.sginin = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
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
