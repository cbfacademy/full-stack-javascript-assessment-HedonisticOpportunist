const logger = require("pino")();
const Suscriber = require("../../models/suscriberModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.addSuscriber = async (req, res, next) => {
  try {
    // Check for existing suscribers
    const { email, createdAt } = req.body;
    const existingSuscriber = await Suscriber.findOne({ email });

    // Check if the user exists
    if (existingSuscriber) {
      return res.json({ message: "User already exists." });
    }

    // Create new suscriber
    const suscriber = await Suscriber.create({ email, createdAt });

    // Indicate that the action was a success
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
