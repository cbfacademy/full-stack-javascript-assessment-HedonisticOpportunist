const { createSecretToken } = require("../../util/secretToken");
const logger = require("pino")();
const User = require("../../models/userModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// SIGN UP CONTROLLER
module.exports.signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check that the user does not already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists." });
    }

    // Create a new user
    const user = await User.create({ email, password, username, createdAt });

    // Create a secret token
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully.", success: true, user });
    next();
  } catch (error) {
    logger.error(error);
  }
};
