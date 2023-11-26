const {
  addSuscriber,
} = require("../controllers/suscriptions/addSuscriberController");
const router = require("express").Router();
const {
  deleteSuscriber,
} = require("../controllers/suscriptions/deleteSuscriberController");
const {
  getSuscribers,
} = require("../controllers/suscriptions/getSuscriberController");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// GET ROUTES
router.get("/suscribers", getSuscribers);

// POST ROUTES
router.post("/suscribe", addSuscriber);

// DELETE ROUTES
router.delete("/delete/:email", deleteSuscriber);

module.exports = router;
