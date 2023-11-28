const logger = require("pino")();
const Suscribers = require("../../models/suscriberModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.getSuscribers = async (req, res, next) => {
  try {
    // Look for suscribers
    const suscribers = await Suscribers.find(req.body);

    // Indicate that the action was a success
    res.status(201).json({
      message: "Users retrieved successfully.",
      success: true,
      suscribers,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
