const mongoose = require("mongoose");

// Credit @ https://codewithsudeep.com/sudeep/javascript/mern-stack/how-to-upload-file-using-mern-stack/
// Any modifications and errors are mine and mine alone

const imageUploadSchema = new mongoose.Schema({
  path: {},
});

module.exports = mongoose.model("UploadFileModel", imageUploadSchema);
