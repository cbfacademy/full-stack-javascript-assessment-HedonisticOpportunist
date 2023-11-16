const { Delete } = require("../controllers/suscribe/DeleteSuscriberController");
const { Suscribe } = require("../controllers/suscribe/SuscribeController");
const router = require("express").Router();

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// POST ROUTES
router.post("/suscribe", Suscribe);

// DELETE ROUTES
router.delete("/delete", Delete);

module.exports = router;
