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

router.get("/signout", (req, res) => {
	console.log('signout metdhod');

	console.log(req.session.isLoggedIn);
	console.log('console');
	if (req.session.isLoggedIn) {
		console.log('entered if statement');
		req.session.destroy();
		console.log('logged out!')
		// res.redirect('/');
	} else console.log('no ones logged in');
});

router.use("/api", apiController);

module.exports = router;
