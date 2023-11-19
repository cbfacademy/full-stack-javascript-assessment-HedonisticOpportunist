const { suscribe } = require("../controllers/suscrptions/suscriberController");
const router = require("express").Router();

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// POST ROUTES
router.post("/suscribe", suscribe);

module.exports = router;
