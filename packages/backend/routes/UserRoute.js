const { Login } = require("../controllers/authenticate/LoginController");
const { Signup } = require("../controllers/authenticate/SignupController");
const { userVerification } = require("../middleware/UserMiddleware");
const router = require("express").Router();

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// POST ROUTES
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/dashboard", userVerification);

module.exports = router;
