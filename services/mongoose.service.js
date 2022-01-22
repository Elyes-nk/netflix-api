const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

exports.dbConnect = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DATABASE Connection Successfull ✅"))
    .catch((err) => {
      console.error(err);
    });
  };

