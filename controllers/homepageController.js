const router = require("express").Router();
const apiController = require("./apiController");
const { User } = require("./../models");

router.get("/", (req, res) => {
	res.render("landingPage", {
		isLoggedIn: req.session.user,
	});
});

router.get("/home", (req, res) => {
	if (!req.session.isLoggedIn) {
		return res.redirect("/");
	} else {
		res.render("home");
	}
});

router.use("/api", apiController);

module.exports = router;
