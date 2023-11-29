const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const { NODE_ENV, FRONTEND_LOCAL_URL, FRONTEND_PROD_URL } = process.env;
const userRoute = require("./routes/userRoute");
const suscriberRoute = require("./routes/suscriberRoute");
const uploadFileRoute = require("./routes/fileUploadRoute");
const app = express();

// Connect to the database
connectToMongoDB();

// Define the origin depending on dot env setitngs
const origin =
  NODE_ENV === "production" ? FRONTEND_PROD_URL : FRONTEND_LOCAL_URL;

// THIRD PARTY MIDDLEWARE
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
app.use(
  cors({
    origin: [origin],
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
