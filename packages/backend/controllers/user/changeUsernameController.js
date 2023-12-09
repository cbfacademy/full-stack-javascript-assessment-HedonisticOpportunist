const logger = require("pino")();
const User = require("../../models/user/userModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// CHANGE USERNAME CONTROLLER //
module.exports.changeUsername = async (req, res, next) => {
  try {
    const { newUsername } = req.params;
    const { username } = req.body;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.json({ message: "User not found." });
    }
    const user = await User.findOneAndReplace({ user: newUsername });
    res.status(201).json({
      message: "Username updated successfully.",
      success: true,
      user: user,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
