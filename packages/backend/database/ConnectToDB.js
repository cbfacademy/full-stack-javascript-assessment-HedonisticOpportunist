const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URL } = process.env;

function connectToMongoDB() {
  mongoose
    .connect(MONGO_URL)
    .then(() =>
      console.log("Success! A connection with MongoDB has been established.")
    )
    .catch((err) => console.error(err));
}

module.exports = {
  connectToMongoDB,
};
