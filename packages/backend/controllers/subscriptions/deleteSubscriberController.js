const logger = require("pino")();
const Subscriber = require("../../models/subscriberModel");

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
    res.status(201).json({
      message: "Subscriber deleted successfully.",
      success: true,
      existingSubscriber,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
