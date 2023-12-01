const logger = require("pino")();

// @Credit: https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any errors are mine and mine alone
module.exports.logout = async (_req, res, next) => {
  try {
    // Clear the authorisation token
    res.clearCookie("token");

    // Indicate that the action was a success
    res
      .status(201)
      .json({ message: "User signed out successfully.", success: true });
    next();
  } catch (error) {
    logger.error(error);
  }
};
