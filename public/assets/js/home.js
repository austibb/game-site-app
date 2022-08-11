// on load, pulls and stores all data on users
let leaderboard = $("#leaderboard");
let userCount = $("#userCount");

var socket = io.connect();

socket.on("userCount", function (data) {
	console.log(data.userCount);

	let onlineUsers = data.userCount;
	userCount.text("Users online: " + onlineUsers / 2);
});

let placeholderuserDB = [
	{ username: "player 1", wincount: "8" },
	{ username: "player 2", wincount: "7" },
	{ username: "player 3", wincount: "6" },
	{ username: "player 4", wincount: "5" },
	{ username: "player 5", wincount: "4" },
	{ username: "player 6", wincount: "3" },
	{ username: "player 7", wincount: "2" },
	{ username: "player 8", wincount: "1" },
];

function challengePlayer() {
	let playerEl = $(this).children();
	let name = playerEl.data("username");
	playerEl.html(
		name + "&nbsp; &nbsp; &nbsp; &nbsp; wins: " + playerEl.data("wincount")
	);
}

let showWins = function () {
	$(this).find(".wins").show();
};

let concealWins = function () {
	$(this).find(".wins").hide();
};

let orderLeaderboard = () => {
	let rows = $('.player').toArray();
	console.log(rows);
	for (row of rows) {
	}
}

let loadMain = () => {
	// loadOnlinePlayers();
	// console.log(username);
	// console.log(usernameField.text())
	// $('#username').text(username);
	orderLeaderboard();
};

// setInterval(loadOnlinePlayers, 5000);
leaderboard.on("mouseenter", ".player", showWins);
leaderboard.on("mouseleave", ".player", concealWins);

loadMain();
