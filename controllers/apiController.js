const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("./../models");

router.post("/signup", async (req, res) => {
	try {
		// create newUser using the credentials the new user just provided (stored in req.body)
		const newUser = await User.create(req.body);
		// save in the session the user and that they are logged in, respond with the newUser in json
		req.session.save(() => {
			req.session.user = newUser;
			req.session.isLoggedIn = true;
			res.json(newUser);
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
});

router.post("/signin", async (req, res) => {
	try {
		// find a user where the username matches one in the database
		const existingUser = await User.findOne({
			where: {
				username: req.body.username,
			},
		});
		// if there is not a username in the database that matches, return an error
		if (!existingUser) {
			return res.json({ error: "401: Invalid Username" });
		}
		// uses bcrypt to compare the encrypted password in the database to the entered password
		const doesPasswordMatch = await bcrypt.compare(
			req.body.password,
			existingUser.password
		);
		// if the password does not match, return an error
		if (!doesPasswordMatch) {
			return res.status(401).json({ error: "Invalid Password" });
		} else {
			// save into the session the existingUser, isLoggedIn to true, and respond with success: true
			req.session.save(() => {
				req.session.user = existingUser;
				req.session.isLoggedIn = true;
				res.json({ success: true });
			});
		}
	} catch (error) {
		console.error(error);
		console.log("not signed in");
		res.status(500).json({ error });
	}
});

router.post("/updateDB", async (req, res) => {

	try {
		const existingUser = await User.findOne({
			where: {
				username: req.body.username,
			},
		});
		// if there is not a username in the database that matches, return an error

		// create newUser using the credentials the new user just provided (stored in req.body)
		const newUser = await User.create(req.body);
		// save in the session the user and that they are logged in, respond with the newUser in json
		req.session.save(() => {
			req.session.user = newUser;
			req.session.isLoggedIn = true;
			res.json(newUser);
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
});

module.exports = router;
