// const { play } = require("@sinisterdev/rock-paper-scissor");
// const e = require("express");

$("#gameGUI").hide();
var userScore = 0;
var compScore = 0;
var moves = 0;

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
	playerOptions.forEach((option) => {
		option.on('click', function () {
			if (inGame) {
				moves++;
				movesLeft.text(`Moves Left: ${10 - moves}`);
				const compChoice = compOptions[Math.floor(Math.random() * 3)];

				winner(this.innerText, compChoice);

				if (moves == 10) {
					gameOver(playerOptions, movesLeft);
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
		console.log('draw!');
	} else {
		switch (player + computer) {
			case 'RockPaper':
				console.log('computer win');
				compScore++;
				computerScoreBoard.text(compScore);
				break;
			case 'ScissorsRock':
				console.log('computer win');
				compScore++;
				computerScoreBoard.text(compScore);
				break;
			case 'PaperScissors':
				console.log('computer win');
				computerScoreBoard.text(compScore);
				compScore++;
				break;
			case 'PaperRock':
				console.log('player win');
				userScore++;
				playerScoreBoard.text(userScore);
				break;
			case 'RockScissors':
				console.log('player win');
				userScore++;
				playerScoreBoard.text(userScore);
				break;
			case 'ScissorsPaper':
				console.log('player win');
				userScore++;
				playerScoreBoard.text(userScore);
				break;
		}
	};

};
const gameOver = (playerOptions, movesLeft) => {
	const chooseMove = $(".move");

	// playerOptions.forEach((option) => {
	// 	// option.css("none");
	// });

	chooseMove.text("Game Over!");
	// movesLeft.hide();

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
		result.text(false);
		updateDB('loss');
	}
	reloadBtn.text("Play Again");
	// reloadBtn.style.display = "flex";

};

var updateDB = function (win) {
	let body;
	if (win) {
		body = 'sdfs';
	} else {
		body = "api/signup";
	}
	try {
		const newTodo = await Todo.create({
			todo: req.body.todo,
			userId: req.session.user.id,
		});
		res.json(newTodo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
};

reloadBtn.on("click", function () {
	console.log($(this).text())
	window.location.reload();
});
$("#playBtn").on('click', function () {
	inGame = true;
	$("#gameGUI").show();
	$(this).hide();
	playGame();
});
