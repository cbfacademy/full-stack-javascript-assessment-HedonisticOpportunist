const { createSecretToken } = require("../../util/secretToken");
const logger = require("pino")();
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// LOGIN CONTROLLER
module.exports.login = async (req, res, next) => {
  try {
    // Check that the email and password fields are populated
    const { email, password } = req.body;

    // Check if the email and password were provided
    if (!email || !password) {
      return res.json({
        message: "The email and password fields are required.",
      });
    }

    // Check that the user's email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email." });
    }

    // Check that the user's password is correct
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password." });
    }

    // Create a secret token
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      secure: true,
      httpOnly: false,
      sessionStorage: user,
      sameSite: "lax",
    });

    // Indicate that the action was a success
    res
      .status(201)
      .json({ message: "User logged in successfully.", success: true });
    next();
  } catch (error) {
    logger.error(error);
  }
};
