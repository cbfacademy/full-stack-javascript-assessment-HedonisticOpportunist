require("dotenv").config();
const FileModel = require("../../models/imageUploadModel");
const logger = require("pino")();

// Credit @ https://cloudinary.com/blog/guest_post/upload-images-to-cloudinary-with-node-js-and-react
// @ https://codewithsudeep.com/sudeep/javascript/mern-stack/how-to-upload-file-using-mern-stack/
// Any further modifications and errors are mine and mine alone.

// UPLOAD IMAGE CONTROLLER
module.exports.uploadImage = async (req, res) => {
  try {
    // Parse the file
    const file = new FileModel();
    file.path = req.file.path;
    await file.save();
    next();
  } catch (error) {
    logger.error(error);

    // Stops the app from crashing
    return res.send("Please upload a file");
  }
};
