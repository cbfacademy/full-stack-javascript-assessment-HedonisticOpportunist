const logger = require("pino")();
const Subscriber = require("../../models/subscriberModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// ADD SUBSCRIBER CONTROLLER //
module.exports.addSubscriber = async (req, res, next) => {
  try {
    const { email, createdAt } = req.body;
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.json({ message: "User already exists." });
    }
    const subscriber = await Subscriber.create({ email, createdAt });
    res.status(201).json({
      message: "User subscribed successfully.",
      success: true,
      subscriber: subscriber,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
