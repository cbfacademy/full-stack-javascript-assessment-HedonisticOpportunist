const logger = require("pino")();
const Suscriber = require("../../models/suscriberModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// DELETE SUSCRIBE CONTROLLER
module.exports.deleteSuscriber = async (req, res, next) => {
  try {
    const { email } = req.params;
    let alteredMail = email.replace(":", "");
    alteredMail = alteredMail.trim();

    // Delete existing suscribers
    const existingSuscriber = await Suscriber.findOneAndDelete({
      email: { $eq: alteredMail },
    });

    res.status(201).json({
      message: "Suscriber deleted successfully.",
      success: true,
      existingSuscriber,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
