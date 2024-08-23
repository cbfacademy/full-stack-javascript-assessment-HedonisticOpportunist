const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../../util/secretToken");
const logger = require("pino")();
const User = require("../../models/user/userModel");
const {
  validateEmail,
  validatePassword,
} = require("../../util/authenticationHelpers");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// LOGIN CONTROLLER //
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "The email and password fields are required.",
      });
    }

    if (!validateEmail(email)) {
      return res.json({
        message: "The email is not valid.",
      });
    }

    if (!validatePassword(password)) {
      return res.json({
        message: "The password is not valid.",
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
    user.token = token;
    res.status(201).json({
      message: "User logged in successfully.",
      success: true,
      token: token,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
