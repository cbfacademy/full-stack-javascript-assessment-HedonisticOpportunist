const File = require("../../models/uploadFileModel");
const multer = require("multer");
const logger = require("pino")();

// @Credit: https://github.com/myogeshchavan97/react-upload-download-files/blob/master/server/routes/file.js
// Any further modifications and errors are mine and mine alone.

// Set up Multer
const storageEngine = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// File filter for Multer
const fileFilter = (file, callback) => {
  let pattern = /jpg|png|svg/;

  if (pattern.test(path.extname(file.originalname))) {
    callback(null, true);
  } else {
    callback("Error: Not a valid file.");
  }
};

// Initialize Multer
const upload = multer({
  storage: storageEngine,
  fileFilter: fileFilter,
});

// UPLOAD IMAGE CONTROLLER
(module.exports.uploadFile = upload.single("file")),
  async (req, res, next) => {
    try {
      // Get file and save it accordingly
      const { title, description } = req.body;
      const { path, mimetype } = req.file;

      // Create new file
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
      });

      // Save the file
      await file.save();
      res.send("File uploaded successfully.");
      next();
    } catch (error) {
      logger.error(error);
      res.status(500).send(error.message);
    }
  };
