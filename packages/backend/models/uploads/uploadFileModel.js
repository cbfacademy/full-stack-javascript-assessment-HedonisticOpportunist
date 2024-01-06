const mongoose = require("mongoose");
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
const fileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title of the work is required."],
  },
  description: {
    type: String,
    required: [true, "The description of the work is required."],
  },
  url: {
    type: String,
    required: [true, "The url of the work is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("File", fileSchema);
