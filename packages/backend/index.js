const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const logger = require("pino")();
const path = require("path");
const { PORT } = process.env;
const userRoute = require("./routes/userRoute");
const suscriberRoute = require("./routes/suscriberRoute");
const uploadFileRoute = require("./routes/fileUploadRoute");
const app = express();

// Connect to the database
connectToMongoDB();

// THIRD PARTY MIDDLEWARE
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));

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

// LISTEN FUNCTION
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
