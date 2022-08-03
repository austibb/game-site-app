require("dotenv").config();
const express = require("express");
// const path = require("path");
// const fs = require("fs");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
// need to change file here
const routes = require("./controllers/homepageController");
// need to make this file too
const helpers = require("./utils/helpers");

const hbs = exphbs.create({
	helpers,
});

// need to set session secret on .env
const sessionSettings = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	// maxAge: ,
	saveUninitialized: false,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
const app = express();

const PORT = process.env.PORT || 3001;

// Template Engine Setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middlewares
app.use(express.static("public"));
app.use(session(sessionSettings));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// serves index page
// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// serves home page
// app.get("/home", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./public/home.html"));
// });

// // creates the bridge to api and serves the db.json when api/notes is entered in url
// app.get("/api/data", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/db/db.json"));
// });

// // Catches all to send to home page
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./public/index.html"));
// });

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("WE MADE IT!!! "));
});
