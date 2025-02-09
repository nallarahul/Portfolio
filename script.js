//Responsive Navbar
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//Instersection oberver API
const animatedSections = document.querySelectorAll('.bar span');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`${entry.target.classList[0]}-animate`); // Add animation class dynamically
        }
    });
});

animatedSections.forEach(section => observer.observe(section));