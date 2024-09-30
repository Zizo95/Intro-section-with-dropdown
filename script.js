const menu = document.querySelector(".menu");

const navBar = document.querySelector("nav");
const login = document.querySelector(".login");
const register = document.querySelector(".register");

menu.addEventListener("click", function(){
    menu.style.display = "none"
navBar.style.display = "flex";
login.style.display = "flex";
register.style.display = "flex";
})