const logger = require("pino")();

// Credit: @ https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any errors are mine and mine alone

// AUTO LOGIN CONTROLLER //
module.exports.autoLogin = async (req, res, next) => {
  try {
    const token = req.body.headers["Authorization"];
    if (!token || token === null || token === undefined) {
      return res.json({ message: "User is not logged in." });
    }
    res.status(201).json({ message: "User logged in.", success: true });
    next();
  } catch (error) {
    logger.error(error);
  }
};
