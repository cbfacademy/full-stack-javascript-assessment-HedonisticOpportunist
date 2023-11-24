const mongoose = require("mongoose");

// Credit @ https://github.com/myogeshchavan97/react-upload-download-files/blob/master/server/model/file.js
// Any further modifications and errors are mine and mine alone.
const fileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The email tile is required."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "The description is required."],
      trim: true,
    },
    file_path: {
      type: String,
      required: [true, "The file path is required."],
    },
    file_mimetype: {
      type: String,
      required: [true, "Your file mime type is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", fileSchema);
