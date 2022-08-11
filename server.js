require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
const routes = require("./controllers/homepageController");
const helpers = require("./utils/helpers");

const hbs = exphbs.create({
	helpers,
});

const sessionSettings = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var userCount = 0;
io.on("connection", (socket) => {
	// new client connection
	console.log("User Connected");
	userCount++;
	io.sockets.emit("userCount", { userCount: userCount });
	socket.on("disconnect", function () {
		userCount--;
		io.sockets.emit("userCount", { userCount: userCount });
	});
});

const PORT = process.env.PORT || 3001;

// handlebars setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middleware setups
app.use(express.static("public"));
app.use(session(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	server.listen(PORT, () => console.log("WE MADE IT!!! "));
});
