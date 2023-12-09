const logger = require("pino")();
const User = require("../../models/user/userModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// CHANGE EMAIL CONTROLLER //
module.exports.changeEmail = async (req, res, next) => {
  try {
    const { newEmail } = req.params;
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({ message: "User not found." });
    }
    const user = await User.findOneAndReplace({ email: newEmail });
    res.status(201).json({
      message: "Email updated successfully.",
      success: true,
      user: user,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
