const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');


let btn = document.getElementById("loginBtn");
let logoutBtn =document.getElementById("logoutBtn");
let userName = document.getElementById("userNames")
// if (localStorage.getItem('loggedIn') === 'true') {
//     btn.style.display = "none"
//     logoutBtn.style.display = "flex"
//     userName.innerText = localStorage.getItem("user")
// }else{
//     logoutBtn.style.display = "none"
//     btn.style.display = "block"
// }

if (localStorage.getItem('loggedIn') === 'true') {
    btn.style.display = "none"
    navList.style.display = "block"
    logoutBtn.style.display = "flex"
    userName.innerText = localStorage.getItem("user")
}else{
    logoutBtn.style.display = "none"
    navList.style.display = "none"
    btn.style.display = "block"
    window.location.href = "/home.html"
}

function consult(){
    console.log("consultation booked")
    alert("Your membership is booked, we will reach out to you over call");
}