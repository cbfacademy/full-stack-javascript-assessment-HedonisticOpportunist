const logger = require("pino")();
const Suscriber = require("../../models/suscriberModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.suscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check for existing suscribers
    const existingSuscriber = await Suscriber.findOne({ email });
    if (existingSuscriber) {
      return res.json({ message: "User already suscribed." });
    }

    // Create a new suscriber
    const suscriber = await Suscriber.create({ email });
    res.status(201).json({
      message: "User suscribed successfully.",
      success: true,
      suscriber,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
