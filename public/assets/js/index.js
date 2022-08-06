const homePageButton = $(".homePageButton");
const enterForm = $("#enterForm");
const startingEl = $("#startingEl");
const loginButton = $("#loginButton");
const loginErrorMessage = $("#loginErrorMessage");
const usernameField = $("#usernameField");
const passwordField = $("#passwordField");

enterForm.hide();
// loginErrorMessage.hide();

homePageButton.on("click", function () {
	if ($(this).attr("id") === "loginBtn") {
		loginButton.text("Login");
	} else {
		loginButton.text("Register");
	}
	startingEl.hide();
	enterForm.show();
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

		await response.json();
		window.location.href = "/home";
	} catch (error) {
		console.error(error);
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
