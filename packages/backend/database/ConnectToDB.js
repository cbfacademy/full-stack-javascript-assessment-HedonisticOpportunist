const logger = require("pino")();
const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URL } = process.env;

function connectToMongoDB() {
  mongoose
    .connect(MONGO_URL)
    .then(() =>
      logger.info("Success! A connection with MongoDB has been established.")
    )
    .catch((err) => logger.error(err));
}

module.exports = {
  connectToMongoDB,
};
