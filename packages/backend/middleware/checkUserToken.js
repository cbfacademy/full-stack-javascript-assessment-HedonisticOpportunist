require("dotenv").config();
const jwt = require("jsonwebtoken");
const logger = require("pino")();
const User = require("../models/user/userModel");

// CODE REUSE (see: checkUserAuthorisation.js) DUE TO THE 'HEADERS SET AFTER SENT TO CLIENT' ERROR
// @ https://www.golinuxcloud.com/cannot-set-headers-after-they-are-sent-to-client/
// Code is needed for token verification for pages other than the dashboard.
module.exports.checkUserHasToken = (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    logger.error("No token could be found.");
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401);
    } else {
      const user = await User.findById(data.id);
      if (user) {
        logger.info("The user is authorised and authenticated.");
        return res.status(200);
      } else {
        logger.error("The user is unauthorised and unauthenticated.");
        return res.status(401);
      }
    }
  });
};
