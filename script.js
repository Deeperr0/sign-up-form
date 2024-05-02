document
	.getElementById("submit-button")
	.addEventListener("click", function (event) {
		console.log("@");
		// Reset all input fields to default outline color
		var inputs = document.querySelectorAll("input");
		inputs.forEach(function (input) {
			input.classList.remove("error");
		});

		// Check if email field is empty or has incorrect format
		var emailInput = document.getElementById("email");
		var emailValue = emailInput.value.trim();
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
		if (emailValue === "" || !emailRegex.test(emailValue)) {
			emailInput.classList.add("error"); // Add error class to input field
			addErrorIcon(emailInput);
		}

		// Check if name field is empty
		var nameInput = document.getElementById("fname");
		var nameValue = nameInput.value.trim();
		if (nameValue === "") {
			nameInput.classList.add("error"); // Add error class to input field
			addErrorIcon(nameInput);
		}
		// Check if name field is empty
		var lnameInput = document.getElementById("lname");
		var lnameValue = lnameInput.value.trim();
		if (lnameValue === "") {
			lnameInput.classList.add("error"); // Add error class to input field
			addErrorIcon(lnameInput);
		}
		// Check if name field is empty
		var passwordInput = document.getElementById("password");
		var passwordValue = password.value.trim();
		if (passwordValue === "") {
			passwordInput.classList.add("error"); // Add error class to input field
			addErrorIcon(passwordInput);
		}
	});
function addErrorIcon(inputElement) {
	var errorIcon = document.createElement("img");
	errorIcon.src = "./assets/icon-error.svg";
	errorIcon.alt = "Error";
	errorIcon.classList.add("error-icon");
	errorIcon.style.position = "absolute";
	var containerRect = inputElement.getBoundingClientRect();
	errorIcon.style.top = containerRect.top + 14 + "px";
	errorIcon.style.right = window.innerWidth - containerRect.right + 15 + "px";
	errorIcon.style.width = "20px";
	inputElement.parentNode.insertBefore(errorIcon, inputElement.nextSibling);
}
// Function to remove error classes and icons when input changes
function handleChange(input) {
	removeErrorIcon(input);
	input.classList.remove("error");
}

// Function to remove error SVG icon
function removeErrorIcon(inputElement) {
	var errorIcon = inputElement.parentNode.querySelector(".error-icon");
	if (errorIcon) {
		errorIcon.parentNode.removeChild(errorIcon);
	}
}
