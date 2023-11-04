const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
