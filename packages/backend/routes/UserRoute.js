const { Login, Signup, Suscribe } = require("../controllers/UserController");
const { userVerification } = require("../middleware/UserMiddleware");
const router = require("express").Router();

router.post("/suscribe", Suscribe);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/dashboard", userVerification);

module.exports = router;
