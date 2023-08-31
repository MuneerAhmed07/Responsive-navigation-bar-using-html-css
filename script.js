let hamburger = document.querySelector(".hambuger");
let navLinks = document.getElementById("navLinks");
let links = document.querySelectorAll(".links");

// Display link onlick on Hamburger

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hide");
    hamburger.classList.toggle("lines-rotate");
});

// Hide navlinks container onclick any single link

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        navLinks.classList.toggle("hide");
    })
}