


const toggle = document
.getElementById('toggle');
const navbardroite = document.querySelector('.navbardroite');

toggle.addEventListener('click', (e) => {
    navbardroite.classList.toggle('active');
    toggle.classList.toggle('toggle-active');
});


const navLinks = document.querySelectorAll('.navbardroite a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbardroite.classList.remove('toggle-active');
    });

});



let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{

    if(window.innerWidth > 768) {

        const currentScrollY = window.scrollY;

        if(currentScrollY > lastScrollY && currentScrollY > 100){

            navbar.classList.add("hidden");

        }

        else{
            navbar.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    }
})

document.querySelector('.Footer').textContent = `© Acile EL DADA ${new Date().getFullYear()}`;