let homePageButton = $(".homePageButton");
let enterForm = $("#enterForm");
let startingEl = $("#startingEl");
let loginButton = $("#loginButton");
let loginErrorMessage = $("#loginErrorMessage"); //delete?
let usernameField = $("#usernameField");
let passwordField = $("#passwordField");
// let logoutBtn = $("#logoutBtn");
let registerBtn = $("#registerBtn");
var username = "default";

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

// placeholder for the logout code
// let logout = () => alert("logoutbutton clicked");

let loginRequest = async function () {
	if (usernameField.val().trim() === 0 || !passwordField.val().trim() >= 8) {
		// user left both or one of the fields blank
		console.log("failed!");
		alert("Please input a valid username and password.");
	}

	username = usernameField.val();
	// console.log(username);
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
			tester(x);
		}
	} catch (error) {
		console.log(error);
		// alert(error);
	}
};

let tester = (x) => {
	console.log(username);
	console.log(x);
	window.location.href = "/home";
};

// init function
let init = () => {
	enterForm.hide();
};

init();

// event handlers
// logoutBtn.on("click", logout);
loginButton.on("click", loginRequest);
