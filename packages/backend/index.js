const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const logger = require("pino")();
const multer = require("multer");
const path = require("path");
const { PORT } = process.env;
const userRoute = require("./routes/userRoute");
const suscriberRoute = require("./routes/suscriberRoute");
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

// HOMEPAGE GET ROUTE
app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

// USER/SUSCRIBER ROUTES
app.use("/", userRoute);
app.use("/", suscriberRoute);

// UPLOADS ROUTE

// Storage Enine for Multer
const storageEngine = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// File filter for Multer
const fileFilter = (file, callback) => {
  let pattern = /jpg|png|svg/;

  if (pattern.test(path.extname(file.originalname))) {
    callback(null, true);
  } else {
    callback("Error: not a valid file.");
  }
};

// Initialize Multer
const upload = multer({
  storage: storageEngine,
  fileFilter: fileFilter,
});

app.post("/fileupload", upload.single("uploadedFile"), (req, res) => {
  res.json(req.file).status(200);
});

// LISTEN FUNCTION
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
