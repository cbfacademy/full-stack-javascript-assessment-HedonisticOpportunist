const mongoose = require("mongoose");
require("dotenv").config();

async function connectoTheDatabase() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully connected to MongoDB.");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB.");
      console.error(error);
    });
}

module.exports = { connectoTheDatabase };
