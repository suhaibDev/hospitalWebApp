let btn = document.getElementById("loginBtn");
let logoutBtn =document.getElementById("logoutBtn");
let navList = document.getElementById("navList")
let userName = document.getElementById("userNames")

if (localStorage.getItem('loggedIn') === 'true') {
    btn.style.display = "none"
    navList.style.display = "block"
    logoutBtn.style.display = "flex"
    userName.innerText = localStorage.getItem("user")
}else{
    logoutBtn.style.display = "none"
    navList.style.display = "none"
    btn.style.display = "block"
}

function logOut(){
    localStorage.setItem('loggedIn', 'false');
    window.location.reload();
}