const logger = require("pino")();
const Files = require("../../models/uploadFileModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// FILES CONTROLLER
module.exports.getFiles = async (req, res, next) => {
  try {
    // Look for files
    const files = await Files.find(req.body);

    // Indicate that the action was a success
    res.status(201).json({
      message: "Files retrieved successfully.",
      success: true,
      files,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
