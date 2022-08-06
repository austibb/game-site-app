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

router.delete("/signout", async (req, res) => {
	console.log('signout metdhod');

	console.log(req.session.isLoggedIn);
	console.log('console');
	// if user isLoggedIn = true
	if (req.session.isLoggedIn) {
		console.log('entered if statement');
		// destroy the session
		// console.log(req.session.isLoggedIn);

		// req.session.destroy();
		// console.log(req.session.isLoggedIn);
		// console.log(req.session.isLoggedIn);
		// console.log('post delete');
		// res.clearCookie(this.cookie, { path: '/' });
		// req.logout();
		Window.location.href = '/';
		// console.log('entered');
		// console.log(req.session.isLoggedIn);
	} else console.log('no ones logged in');
});

router.use("/api", apiController);

module.exports = router;
