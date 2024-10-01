const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".navbar");
const featureDown = document.querySelector(".fea-arrow-down");
const featureUp = document.querySelector(".fea-arrow-up");
const ul = document.querySelector(".list");
const links = document.querySelector("nav");


menu.addEventListener("click", function(){
menu.style.display = "none"
closeMenu.style.display = "block";
navBar.style.display = "flex";

});

closeMenu.addEventListener("click",function(){
    menu.style.display = "block"
    closeMenu.style.display = "none";
    navBar.style.display = "none";
});
featureUp.addEventListener("click", function(){
    event.preventDefault()
    ul.style.display = "block";
links.style.lineHeight = "";
    })