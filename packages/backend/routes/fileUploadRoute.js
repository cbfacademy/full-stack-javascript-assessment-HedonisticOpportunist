const router = require("express").Router();
const { uploadFile } = require("../controllers/uploads/fileUploadController");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// POST ROUTES
router.post("/uploads", uploadFile);

module.exports = router;
