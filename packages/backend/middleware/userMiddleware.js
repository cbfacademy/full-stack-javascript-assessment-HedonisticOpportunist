require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
// Any further modifications are mine and mine alone.
module.exports.userVerification = (req, res) => {
  const token = req.body.headers["Authorization"];
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

async function getUserName(res, data) {
  const user = await User.findById(data.id);
  if (user) return res.json({ status: true, user: user.username });
  else return res.json({ status: false });
}
