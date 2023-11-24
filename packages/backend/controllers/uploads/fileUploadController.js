const File = require("../../models/uploadFileModel");
const multer = require("multer");
const logger = require("pino")();

// @Credit: https://github.com/myogeshchavan97/react-upload-download-files/blob/master/server/routes/file.js
// Any further modifications and errors are mine and mine alone.

// Set up Multer
const upload = multer({
  storage: multer.diskStorage({
    destination(cb) {
      cb(null, "./files");
    },
    filename(file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000,
  },
  fileFilter(file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|)$/)) {
      return cb(new Error("Only upload files with jpg, jpeg, and png format."));
    }
    cb(undefined, true);
  },
});

// UPLOAD IMAGE CONTROLLER
(module.exports.uploadFile = upload.single("file")),
  async (req, res, next) => {
    try {
      // Get file and save it accordingly
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
      });
      await file.save();
      res.send("File uploaded successfully.");
      next();
    } catch (error) {
      logger.error(error);
      res.status(500).send(error.message);
    }
  };
