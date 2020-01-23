const User = require("../model/user");

exports.signin = async (req, res) => {
  const user = new User({ name: "test", email: "test2@test.com" });
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
