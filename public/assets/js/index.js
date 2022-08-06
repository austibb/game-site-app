let homePageButton = $(".homePageButton");
let enterForm = $("#enterForm");
let startingEl = $("#startingEl");
let loginButton = $("#loginButton");
let loginErrorMessage = $("#loginErrorMessage");
let usernameField = $("#usernameField");
let passwordField = $("#passwordField");
let logoutBtn = $("#logoutBtn");
let registerBtn = $("#registerBtn");

enterForm.hide();
// loginErrorMessage.hide();

// determines if the user is logging in or signing up
homePageButton.on("click", function () {
	if ($(this).attr("id") === "loginBtn") {
		loginButton.text("Login");
	} else {
		loginButton.text("Register");
	}
	startingEl.hide();
	enterForm.show();
});

logoutBtn.on("click", () => {
	alert("logoutbutton clicked");
});

loginButton.on("click", async function () {
	if (usernameField.val().trim() === 0 || !passwordField.val().trim() >= 8) {
		// user left both or one of the fields blank
		console.log("failed!");
		alert("Please input a valid username and password.");
	}

	const username = usernameField.val();
	const password = passwordField.val();

	let fetchURL;
	if ($(this).text() === "Login") {
		fetchURL = "api/signin";
	} else {
		fetchURL = "api/signup";
	}
	try {
		const response = await fetch(fetchURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});

		let x = await response.json();
		if (x.success) {
			console.log(x);
			window.location.href = "/home";
		}
	} catch (error) {
		console.log(error);
		alert(error);
	}
});

loginButton.on("click", async function () {
	if (usernameField.val().trim() === 0 || !passwordField.val().trim() >= 8) {
		// user left both or one of the fields blank
		console.log("failed!");
		alert("Please input a valid username and password.");
	}

	const username = usernameField.val();
	const password = passwordField.val();

	try {
		const response = await fetch("api/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});

		let x = await response.json();
		if (x.success) {
			console.log(x);
			window.location.href = "/home";
		}
	} catch (error) {
		console.log(error);
		alert(error);
	}
});

// if (loginButton.text() === 'Login') {
//   check to verify the credentials exist in the db
//   if (check failed) {
//     loginErrorMessage.text('This password and username combination do not exist. Please try again.')
//   } else { //check succeeded
//     success, enter next page
//     loginErrorMessage.html(`&ensp;`)
//   }
//   if/else for correct credentials
// } else { // user is registering new account
//   check user name is not already being used in db
//   if (username is being used ) {
//     loginErrorMessage.text('This username is already taken, please try another.')
//   } else {
//     loginErrorMessage.html(`&ensp;`)
//     success, enter next page
//     maybe display a loading animation
//   }
// };
