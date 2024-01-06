require("dotenv").config();
const jwt = require("jsonwebtoken");
const logger = require("pino")();
const User = require("../models/user/userModel");

// Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
// Any further modifications are mine and mine alone.
module.exports.checkUserIsAuthorised = (req, res) => {
  try {
    const token = req.body.headers["Authorization"];
    if (!token) {
      return res.json({ status: false, message: "No token could be found." });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({
          status: false,
          message: "The token could not be verified.",
        });
      } else {
        getUsername(res, data);
      }
    });
  } catch {
    logger.error("No token could be found.");
  }
};

async function getUsername(res, data) {
  const user = await User.findById(data.id);
  if (user)
    return res.json({
      status: true,
      user: user.username,
      message: "The token was successfully verified.",
    });
  else return res.json({ status: false });
}
