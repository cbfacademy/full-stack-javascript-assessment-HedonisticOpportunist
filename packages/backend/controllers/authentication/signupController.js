const { createSecretToken } = require("../../util/secretToken");
const logger = require("pino")();
const User = require("../../models/user/userModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// SIGN UP CONTROLLER //
module.exports.signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists." });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    user.token = token;
    res.status(201).json({
      message: "User signed in successfully.",
      success: true,
      token: token,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
