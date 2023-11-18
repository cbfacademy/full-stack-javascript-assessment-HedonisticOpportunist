const router = require("express").Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/uploads/uploadImageController");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// https://namanrivaan.medium.com/how-to-upload-an-image-with-mern-stack-a6c02e0a26b7
// Any further modifications and errors are mine and mine alone.

// SETUP MULTER
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myfile");

const obj = (req, res, next) => {
  try {
    upload(req, res, () => {
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

// POST ROUTES
router.post("/fileupload", obj, uploadImage);

module.exports = router;
