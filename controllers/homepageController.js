const router = require("express").Router();
const apiController = require("./apiController");
// when models are created put them here
// const { Todo, User } = require("./../models");

router.get("/", (req, res) => {
	res.render("landingPage", {
		// isLoggedIn: req.session.user,
	});
});

router.use("/api", apiController);

module.exports = router;