const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("connect");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
