const authRoute = require("./routes/AuthRoute");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/HelperFunctions");
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

app.get("/cors", (req, res) => {
  res.send("This has CORS enabled 🐈🐈");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
