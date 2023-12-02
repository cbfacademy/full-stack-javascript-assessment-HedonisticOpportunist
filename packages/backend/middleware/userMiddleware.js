require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Credit: @ https://github.com/itsrakeshhq/productivity-app/blob/main/server/middleware/auth.js
// Any further modifications are mine and mine alone.
module.exports.userVerification = (req, res) => {
  const token = String(req.headers.authorization)
    .replace(/^bearer|^jwt/i, "")
    .replace(/^\s+|\s+$/gi, "");

  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      getUserName(res, data);
    }
  });
};

// Get the user name
async function getUserName(res, data) {
  const user = await User.findById(data.id);
  if (user) return res.json({ status: true, user: user.username });
  else return res.json({ status: false });
}
