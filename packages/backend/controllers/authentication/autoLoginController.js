const logger = require("pino")();

// Credit: @ https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any errors are mine and mine alone

module.exports.autoLogin = async (req, res, next) => {
  try {
    // Get the cookie from the request headers
    const cookie = req.headers.cookie;

    // Indicate an error if there is no cookie
    if (!cookie || cookie === null) {
      return res.json({ message: "User is not logged in." });
    }

    // Indicate that the action was a success
    res
      .status(201)
      .json({ message: "User signed out successfully.", success: true });
    next();
  } catch (error) {
    logger.error(error);
  }
};
