// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Button click handlers
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('#models').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your interest! A BMW representative will contact you soon.');
    });
});

document.querySelector('.contact-btn').addEventListener('click', () => {
    alert('Contact form coming soon! Call us at 1-800-BMW-CARS');
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});