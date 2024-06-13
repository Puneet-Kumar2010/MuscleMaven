// * modules
const express = require("express");
const bodyParser = require('body-parser');

// * importing files
const controller = require("../controller/controller");

// * configurations
const router = express();
router.set('view engine', 'pug');
router.set('views', './views');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static('public'));

// * requests & responses
router.get("/", controller.Load);
router.get("/developer-contact", controller.DeveloperContactLoad);
router.post("/developer-contact", controller.DeveloperContacting);
router.get("/feedback", controller.FeedbackLoad);
router.post("/feedback", controller.FeedbackConnecting);
router.get("/privacy-and-policies", controller.PrivacyAndPolicies);
router.get("/chat", controller.ChatRoom);
router.get("/articles", controller.articles);
router.get("/daily-exercises", controller.DailyExercises);
router.get("/training", controller.Training);

// * exporting router
module.exports = router;