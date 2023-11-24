const logger = require("pino")();
const Files = require("../../models/uploadFileModel");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// https://github.com/myogeshchavan97/react-upload-download-files/blob/master/server/routes/file.js
// Any further modifications and errors are mine and mine alone.
module.exports.getFiles = async (req, res, next) => {
  try {
    const files = await Files.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.status(201).json({
      message: "Files retrieved successfully.",
      success: true,
      sortedByCreationDate,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
