const { connectToMongoDB } = require("./database/ConnectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/LandingPageMessages");
const { PORT } = process.env;
const userRoute = require("./routes/UserRoute.js");
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

app.use("/", userRoute);

// LISTEN FUNCTION
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
