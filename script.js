// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function(){
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

// ANIMAÇÃO AO ROLAR
window.addEventListener("scroll", reveal);

function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    for(let i=0;i<reveals.length;i++){
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}

// CONTADOR ANIMADO
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
