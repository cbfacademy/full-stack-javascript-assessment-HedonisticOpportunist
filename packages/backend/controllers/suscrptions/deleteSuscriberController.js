const logger = require("pino")();
const Suscriber = require("../../models/suscriberModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.deleteSuscriber = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check for existing suscribers
    const existingSuscriber = await Suscriber.findOne({ email });
    if (!existingSuscriber) {
      return res.json({ message: "User not suscribed." });
    }

    // Delete existing suscriber
    await existingSuscriber.deleteOne({ email });
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
