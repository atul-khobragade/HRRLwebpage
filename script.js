// JavaScript to toggle navigation on mobile devices
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('open');
    });

    // Header animation
    const header = document.querySelector('header');
    header.classList.add('header-animated');
});
