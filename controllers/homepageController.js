const router = require("express").Router();
const apiController = require("./apiController");
const { User } = require("./../models");

router.get("/", (req, res) => {
	res.render("landingPage", {
		isLoggedIn: req.session.user,
	});
});

router.get("/home", async (req, res) => {
	if (!req.session.isLoggedIn) {
		return res.redirect("/");
	} else {
		const dbUsersData = await User.findAll();
		const users = dbUsersData.map(dbUser => dbUser.get({plain: true}));
		console.log(req.session.user);
		res.render("home", { 
			users,
			user: req.session.user,
			winratio: parseInt(req.session.user.wins) / parseInt(req.session.user.gamesPlayed)
		});
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
