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

// Set up third party middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routes
app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

app.get("/cors", (req, res) => {
  res.send("This has CORS enabled 🐈🐈");
});

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
