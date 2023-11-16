const logger = require("pino")();
const Suscriber = require("../../models/SuscriberModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.Suscribe = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingSuscriber = await Suscriber.findOne({ email });
    if (existingSuscriber) {
      return res.json({ message: "User already suscribed." });
    }
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
