const logger = require("pino")();
const Suscriber = require("../../models/suscriberModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.deleteSuscriber = async (req, res, next) => {
  try {
    const { email } = req.body;
    const suscriber = await Suscriber.deleteOne({ email });
    res.status(201).json({
      message: "Suscriber deleted successfully.",
      success: true,
      suscriber,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
