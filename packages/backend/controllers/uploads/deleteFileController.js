const File = require("../../models/uploads/uploadFileModel");
const logger = require("pino")();

// @Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// DELETE FILE CONTROLLER //
module.exports.deleteFile = async (req, res, next) => {
  try {
    const { title } = req.params;
    let alteredTitle = title.replace(":", "");
    alteredTitle = alteredTitle.trim();
    const existingFile = await File.findOneAndDelete({
      title: { $eq: alteredTitle },
    });
    res.status(201).json({
      message: "File deleted successfully.",
      success: true,
      file: existingFile,
    });
    next();
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};
