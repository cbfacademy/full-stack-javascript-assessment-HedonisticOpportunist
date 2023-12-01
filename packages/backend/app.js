const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const userRoute = require("./routes/userRoute");
const suscriberRoute = require("./routes/suscriberRoute");
const uploadFileRoute = require("./routes/fileUploadRoute");
const app = express();

// Connect to the database
connectToMongoDB();

// Get the origin from the .env file
originUrl =
  process.env.NODE_ENV === "PRODUCTION"
    ? process.env.FRONTEND_PROD_URL
    : process.env.FRONTEND_LOCAL_URL;

// THIRD PARTY MIDDLEWARE
// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
app.use(
  cors({
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    origin: originUrl,
    allowedHeaders: [
      "set-cookie",
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
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
