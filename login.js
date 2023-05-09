// Dummy credentials
const dummyUsername = "12345";
const dummyPassword = "12345";

// Get form and inputs
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');


let btn = document.getElementById("loginBtn");
let logoutBtn =document.getElementById("logoutBtn");
let userName = document.getElementById("userNames")

// Check if user is already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    btn.style.display = "none"
    logoutBtn.style.display = "flex"
    userName.innerText = localStorage.getItem("user")
}else{
    logoutBtn.style.display = "none"
    btn.style.display = "block"
}
// Listen for form submit event
form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent form from submitting

	// Get input values
	const username = usernameInput.value;
	const password = passwordInput.value;

	// Check if credentials match
	if (username === dummyUsername && password === dummyPassword) {
		// Store login status in local storage
		localStorage.setItem('loggedIn', 'true');
		localStorage.setItem('user', 'V care');
		window.location.href = 'doctors.html';
	} else {
		alert('Invalid username or password');
	}
});

