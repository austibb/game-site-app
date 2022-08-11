let gamesPlayed = 0;

// sets moves and scores to baseline
$("#gameGUI").hide();
var userScore = 0;
var compScore = 0;
var moves = 0;

// all required DOM elements
const result = $("#result");
const reloadBtn = $(".reload");
const rockBtn = $("#rockBtn");
const paperBtn = $("#paperBtn");
const scissorBtn = $("#scissorBtn");
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const compOptions = ["Rock", "Paper", "Scissors"];
const movesLeft = $(".movesLeft");
var inGame = false;

const playGame = () => {
	// on click of any of the player options
	playerOptions.forEach((option) => {
		option.on("click", function () {
			// if inGame, increment up moves up, set the text of moves left to 10-amount of moves taken
			if (inGame) {
				moves++;
				movesLeft.text(`Moves Left: ${10 - moves}`);
				// then make the computer make a random choice
				const compChoice = compOptions[Math.floor(Math.random() * 3)];
				// winner function takes the user input (the buttons text = the input) and the computer choice
				winner(this.innerText, compChoice);
				// if 10 moves have been made
				if (moves == 10) {
					// gameOver function takes the playerOptions and movesLeft
					gameOver(playerOptions, movesLeft);
					// set inGame to false
					inGame = false;
				}
			}
		});
	});
};

const winner = (player, computer) => {
	const playerScoreBoard = $(".p-count");
	const computerScoreBoard = $(".c-count");
	console.log(player);
	console.log(computer);
	if (player == computer) {
		console.log("draw!");
	} else {
		switch (player + computer) {
			case "RockPaper":
				console.log("computer win");
				compScore++;
				computerScoreBoard.text(compScore);
				break;
			case "ScissorsRock":
				console.log("computer win");
				compScore++;
				computerScoreBoard.text(compScore);
				break;
			case "PaperScissors":
				console.log("computer win");
				computerScoreBoard.text(compScore);
				compScore++;
				break;
			case "PaperRock":
				console.log("player win");
				userScore++;
				playerScoreBoard.text(userScore);
				break;
			case "RockScissors":
				console.log("player win");
				userScore++;
				playerScoreBoard.text(userScore);
				break;
			case "ScissorsPaper":
				console.log("player win");
				userScore++;
				playerScoreBoard.text(userScore);
				break;
		}
	}
};
const gameOver = (playerOptions, movesLeft) => {
	const chooseMove = $(".move");
	chooseMove.text("Game Over!");
	if (userScore > compScore) {
		result.css({ color: "green", "font-size": "2rem" });
		result.text("You Won The Game");
		updateDB(true);
	} else if (userScore < compScore) {
		result.css({ color: "red", "font-size": "2rem" });
		result.text("You Lost The Game");
		updateDB(false);
	} else {
		result.css({ color: "grey", "font-size": "2rem" });
		result.text("Draw");
		updateDB("loss");
	}
	reloadBtn.text("Play Again");
};

var updateDB = async function(win) {
	let update;
	if (win) {
		update = {wins: 1, gamesPlayed: 1};
/*
var updateDB = async function (win) {
	let body;
	if (win) {
		body = "sdfs";
*/
	} else {
		update = {gamesPlayed: 1};
	}
// austin
	try {
		const response = await fetch('api/updateDB', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(update),
		});
	} catch (error) {
		console.log(error);
	}
};

reloadBtn.on("click", function () {
	console.log($(this).text())
		window.location.reload();
// split
};

reloadBtn.on("click", function () {
	console.log($(this).text());
	window.location.reload();
//max 
});
$("#playBtn").on("click", function () {
	gamesPlayed++;
	inGame = true;
	$("#gameGUI").show();
	$(this).hide();
	playGame();
});
