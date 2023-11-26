const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const userRoute = require("./routes/userRoute");
const suscriberRoute = require("./routes/suscriberRoute");
const uploadFileRoute = require("./routes/fileUploadRoute");
const app = express();
require("dotenv").config();
const { DEPLOYED_REACT_URL } = process.env;

// Connect to the database
connectToMongoDB();

// THIRD PARTY MIDDLEWARE
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
app.use(
  cors({
    origin: [DEPLOYED_REACT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// HOMEPAGE GET ROUTE
app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

// USER || SUSCRIBER || UPLOAD ROUTES
app.use("/", userRoute);
app.use("/", suscriberRoute);
app.use("/", uploadFileRoute);

module.exports = app;
