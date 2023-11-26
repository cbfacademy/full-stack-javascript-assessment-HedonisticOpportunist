const File = require("../../models/uploadFileModel");
const logger = require("pino")();

// @Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// UPLOAD IMAGE CONTROLLER
module.exports.uploadFile = async (req, res, next) => {
  try {
    // Check for existing files
    const { title, description, url, createdAt } = req.body;
    const existingFile = await File.findOne({ url });

    if (existingFile) {
      return res.json({ message: "File already exists." });
    }

    // Create new file
    const file = await File.create({ title, description, url, createdAt });
    res.status(201).json({
      message: "File added successfully.",
      success: true,
      file,
    });
    next();
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};
