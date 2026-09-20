const header = document.querySelector("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scroll Down
        header.classList.add("up");
    } else {
        // Scroll Up
        header.classList.remove("up");
    }

    lastScrollY = currentScrollY;
});

const menuBtn = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu");
const menuElement = menu.querySelectorAll("li");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
})

menuElement.forEach(li => {
    li.addEventListener("click", ()=>{
        menu.classList.remove("show");
    })
})

const stars = document.querySelectorAll(".stars");
stars.forEach(star => {
    star.innerHTML = star.innerHTML.repeat(5);
});