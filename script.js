// Navbar muda ao rolar
window.addEventListener("scroll", function(){
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Animação dos cards
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            card.classList.add("show");
        }
    });
});
