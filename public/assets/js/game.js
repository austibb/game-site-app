$("#gameGUI").hide();

const game = () => {
	let userScore = 0;
	let compScore = 0;
	let moves = 0;

	const playGame = () => {
		const rockBtn = $("#rockBtn");
		const paperBtn = $("#paperBtn");
		const scissorBtn = $("#scissorBtn");
		const playerOptions = [rockBtn, paperBtn, scissorBtn];
		const compOptions = ["rock", "paper", "scissors"];

		playerOptions.forEach((option) => {
			option.click(function () {
				const movesLeft = $(".movesLeft");
				moves++;
				movesLeft.text(`Moves Left: ${10 - moves}`);

				const choiceNumber = Math.floor(Math.random() * 3);
				const compChoice = compOptions[choiceNumber];

				winner(this.innerText, compChoice);

				if (moves == 10) {
					gameOver(playerOptions, movesLeft);
				}
			});
		});
	};
	const winner = (player, computer) => {
		const result = $("#result");
		const playerScoreBoard = document.querySelector(".p-count");
		const computerScoreBoard = document.querySelector(".c-count");
		console.log(player);
		console.log(computer);
		if (player === computer) {
			$("#result").text("Draw");
		} else if (player == "rock") {
			if (computer == "paper") {
				$("#result").text("Computer Wins");
				compScore++;
				computerScoreBoard.text(compScore);
			} else {
				$("#result").text("Player Wins");
				userScore++;
				playerScoreBoard.text(userScore);
			}
		} else if (player == "scissors") {
			if (computer == "rock") {
				$("#result").text("Computer Wins");
				compScore++;
				computerScoreBoard.text(compScore);
			} else {
				$("#result").text("Player Wins");
				userScore++;
				playerScoreBoard.text(userScore);
			}
		} else if (player == "paper") {
			if (computer == "scissors") {
				$("#result").text("Computer Wins");
				compScore++;
				computerScoreBoard.text(compScore);
			} else {
				$("#result").text("Player Wins");
				userScore++;
				playerScoreBoard.text(userScore);
			}
		}
	};
	const gameOver = (playerOptions, movesLeft) => {
		const chooseMove = $(".move");
		const result = $("#result");
		const reloadBtn = $(".reload");

		playerOptions.forEach((option) => {
			// option.css("none");
		});

		chooseMove.text("Game Over!");
		// movesLeft.style.display = "none";

		if (userScore > compScore) {
			$("#result").css({ color: "green", "font-size": "2rem" });
			// result.style.fontSize = "2rem";
			$("#result").text("You Won The Game");
			// result.style.color = "#308D46";
		} else if (userScore < compScore) {
			$("#result").css({ color: "red", "font-size": "2rem" });
			// result.style.fontSize = "2rem";
			$("#result").text("You Lost The Game");
			// result.style.color = "red";
		} else {
			$("#result").css({ color: "grey", "font-size": "2rem" });
			// result.style.fontSize = "2rem";
			$("#result").text("Draw");
			// result.style.color = "grey";
		}
		reloadBtn.text("Restart");
		// reloadBtn.style.display = "flex";
		reloadBtn.on("click", () => {
			window.location.reload();
		});
	};
	playGame();
};

$("#playBtn").click(function () {
	$("#gameGUI").show();
	game();
});
