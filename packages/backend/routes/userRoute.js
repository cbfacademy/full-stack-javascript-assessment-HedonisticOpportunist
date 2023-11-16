const { login } = require("../controllers/authentication/loginController");
const { signup } = require("../controllers/authentication/signupController");
const { userVerification } = require("../middleware/userMiddleware");
const router = require("express").Router();

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.

// POST ROUTES
router.post("/signup", signup);
router.post("/login", login);
router.post("/dashboard", userVerification);

module.exports = router;
