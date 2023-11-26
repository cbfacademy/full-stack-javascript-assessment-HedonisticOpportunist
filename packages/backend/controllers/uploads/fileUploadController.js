const File = require("../../models/uploadFileModel");
const logger = require("pino")();

// @Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// UPLOAD IMAGE CONTROLLER
module.exports.uploadFile = async (req, res, next) => {
  try {
    const { file, title, description, createdAt } = req.body;
    const existingFile = await File.findOne({ file });

    // Search for existing files
    if (existingFile) {
      return res.json({ message: "File already exists." });
    }

    // Create a new file
    const newFile = await File.create({ file, title, description, createdAt });
    res.status(201).json({
      message: "Files created successfully.",
      success: true,
      newFile,
    });
    next();
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};
