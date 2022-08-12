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
		let x = await response.json();
		if (x.success) {
			window.location.href = "/";
		};
		// Window.location.href = '/';
	} catch (error) {
		// console.log(error);
		alert(error);
	}

};
logoutBtn.on("click", logout);
