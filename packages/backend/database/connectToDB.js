require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URL } = process.env;
const logger = require("pino")();

function connectToMongoDB() {
  mongoose
    .connect(MONGO_URL, {
      autoIndex: true,
    })
    .then(() =>
      logger.info("Success! A connection with MongoDB has been established.")
    )
    .catch((err) => logger.error(err));
}

module.exports = {
  connectToMongoDB,
};
