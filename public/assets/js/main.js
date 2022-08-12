let logoutBtn = $("#logoutBtn");

// placeholder for the logout code
let logout = async () => {
	try {
		const response = await fetch("/signout", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		// Window.location.href = '/';
	} catch (error) {
		console.error(error);
		alert(error);
	}
};
logoutBtn.on("click", logout);
