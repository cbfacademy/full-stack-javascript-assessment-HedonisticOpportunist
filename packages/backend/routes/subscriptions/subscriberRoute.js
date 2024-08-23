const {
  addSubscriber,
} = require("../../controllers/subscriptions/addSubscriberController");
const { checkUserHasToken } = require("../../middleware/checkUserToken");
const router = require("express").Router();
const {
  deleteSubscriber,
} = require("../../controllers/subscriptions/deleteSubscriberController");
const {
  getSubscribers,
} = require("../../controllers/subscriptions/getSubscribersController");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// GET ROUTES
router.get("/subscribers", getSubscribers);

// POST ROUTES
router.post("/subscribe", addSubscriber, checkUserHasToken);

// DELETE ROUTES
router.delete("/deleteSubscriber:email", deleteSubscriber, checkUserHasToken);

module.exports = router;
