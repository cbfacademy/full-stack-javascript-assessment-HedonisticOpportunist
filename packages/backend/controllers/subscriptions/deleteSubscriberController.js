const logger = require("pino")();
const Subscriber = require("../../models/subscriptions/subscriberModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// DELETE SUBSCRIBER CONTROLLER //
module.exports.deleteSubscriber = async (req, res, next) => {
  try {
    const { email } = req.params;
    let alteredMail = email.replace(":", "");
    alteredMail = alteredMail.trim();
    const existingSubscriber = await Subscriber.findOneAndDelete({
      email: { $eq: alteredMail },
    });
    if (!existingSubscriber) {
      return res.json({
        message: "The subscriber does not exist.",
      });
    }
    res.status(201).json({
      message: "Subscriber deleted successfully.",
      success: true,
      subscriber: existingSubscriber,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
