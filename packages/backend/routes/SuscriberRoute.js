const {
  deleteSuscriber,
} = require("../controllers/suscrptions/deleteSuscriberController");
const { suscribe } = require("../controllers/suscrptions/suscriberController");
const router = require("express").Router();

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// POST ROUTES
router.post("/suscribe", suscribe);

// DELETE ROUTES
router.delete("/delete", deleteSuscriber);

module.exports = router;
