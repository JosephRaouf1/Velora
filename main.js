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
const menuElement = menu.querySelectorAll(".link");

menuBtn.addEventListener("click", ()=>{
    const isOpen = menu.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", isOpen);
})

menuElement.forEach(link => {
    link.addEventListener("click", ()=>{
        menu.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuElement.forEach(li =>{
            if(li.classList.contains("active")){
                li.classList.remove("active")
            }
        })
        link.classList.add("active");
    })
})

const sections = document.querySelectorAll("section")

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        if (!section.id) return;

        const top = section.offsetTop - 250;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {

            const activeLink = document.querySelector(`.menu a[href="#${section.id}"]`);
            if (!activeLink) return;

            menuElement.forEach(link => {
                link.classList.remove("active");
            });

            activeLink.classList.add("active");
        }
    });

});

// Forms: prevent the page from reloading on submit
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.reset();
    });
});
