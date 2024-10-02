const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".navbar");
const featureDown = document.querySelector(".fea-arrow-down");
const featureUp = document.querySelector(".fea-arrow-up");
const companyDown = document.querySelector(".com-arrow-down");
const companyUp = document.querySelector(".com-arrow-up");
const ul = document.querySelector("ul");
const ol = document.querySelector("ol");
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
    featureUp.style.display = "none";
    ul.style.display = "block";
    featureDown.style.display = "inline";

    });

    featureDown.addEventListener("click", function(){
        event.preventDefault()
        featureDown.style.display = "none";
        ul.style.display = "none";
        featureUp.style.display = "inline";
        });

        companyUp.addEventListener("click", function(){
            event.preventDefault()
            companyUp.style.display = "none";
            ol.style.display = "block";
            companyDown.style.display = "inline";
        
            });
        
            companyDown.addEventListener("click", function(){
                event.preventDefault()
                companyDown.style.display = "none";
                ol.style.display = "none";
                companyUp.style.display = "inline";
                });