const logger = require("pino")();
const Subscribers = require("../../models/subscriberModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// GET SUBSCRIBERS CONTROLLER //
module.exports.getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscribers.find(req.body);
    res.status(201).json({
      message: "Users retrieved successfully.",
      success: true,
      subscribers: subscribers,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
