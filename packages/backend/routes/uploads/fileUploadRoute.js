const router = require("express").Router();
const {
  deleteFile,
} = require("../../controllers/uploads/deleteFileController");
const { getFiles } = require("../../controllers/uploads/getFilesController");
const {
  uploadFile,
} = require("../../controllers/uploads/fileUploadController");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// GET ROUTES
router.get("/files", getFiles);

// POST ROUTES
router.post("/uploads", uploadFile);

// DELETE ROUTES
router.delete("/deleteFile:title", deleteFile);

module.exports = router;
