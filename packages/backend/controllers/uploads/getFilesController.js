const logger = require("pino")();
const Files = require("../../models/uploadFileModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// GET FILES CONTROLLER //
module.exports.getFiles = async (req, res, next) => {
  try {
    const files = await Files.find(req.body);
    res.status(201).json({
      message: "Files retrieved successfully.",
      success: true,
      files: files,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
