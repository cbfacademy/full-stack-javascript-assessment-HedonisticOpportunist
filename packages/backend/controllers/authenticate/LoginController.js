const { createSecretToken } = require("../../util/SecretToken");
const logger = require("pino")();
const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// LOGIN CONTROLLER
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "The email and password fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email." });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password." });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully.", success: true });
    next();
  } catch (error) {
    logger.error(error);
  }
};
