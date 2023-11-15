const logger = require("pino")();
const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// SUSCRIBE CONTROLLER
module.exports.Suscribe = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already suscribed" });
    }
    const user = await User.create({ email });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User suscribed successfully", success: true, user });
    next();
  } catch (error) {
    logger.error(error);
  }
};
