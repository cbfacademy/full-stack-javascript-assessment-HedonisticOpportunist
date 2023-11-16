const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const logger = require("pino")();
const { PORT } = process.env;
const userRoute = require("./routes/userRoute");
const suscriberRoute = require("./routes/suscriberRoute");
const app = express();

// Connect to the database
connectToMongoDB();

// THIRD PARTY MIDDLEWARE
// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

// SPECIFIC ROUTES
app.use("/", userRoute);
app.use("/", suscriberRoute);

// LISTEN FUNCTION
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
