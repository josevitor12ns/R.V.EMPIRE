// MENU MOBILE
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

// ANIMAÇÃO AO ROLAR
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){
            el.classList.add("active");
        }
    });
});
