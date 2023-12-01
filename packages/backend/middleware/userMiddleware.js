require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    // Get the username, regardless whether the token is available or not (cookies not being set on deployed site issue)
    getUserName(res);
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

// Get the user name
async function getUserName() {
  const user = await User.findById(data.id);
  if (user) return res.json({ status: true, user: user.username });
  else return res.json({ status: false });
}
