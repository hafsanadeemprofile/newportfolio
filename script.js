const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');
const navLinks = sidebar.querySelectorAll('nav a');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('show');
});

function Close(){
    sidebar.classList.remove('show');
    burger.classList.toggle('active');
}
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('show');
        burger.classList.remove('active');
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth scroll highlighting
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
