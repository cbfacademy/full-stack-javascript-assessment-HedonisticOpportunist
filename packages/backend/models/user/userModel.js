const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
//
// Any further modifications and errors are mine and mine alone.
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique: [true, "Your email address should be unique"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    match: /.+\@.+\..+/,
    unique: [true, "Your email address should be unique"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    unique: [true, "Your password should be unique"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  token: { type: String },
});

// HASH PASSWORD
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
