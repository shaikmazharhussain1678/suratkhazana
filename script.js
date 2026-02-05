AOS.init();

// Mobile Menu
const toggle = document.getElementById('mobile-menu-toggle');
const nav = document.querySelector('nav ul');
toggle.addEventListener('click', () => nav.classList.toggle('active'));

// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    document.querySelector('.carousel-container').style.transform = `translateX(-${index * 50}%)`;
}
dots.forEach(dot => dot.addEventListener('click', (e) => showSlide(parseInt(e.target.dataset.slide))));
setInterval(() => showSlide((currentSlide + 1) % slides.length), 5000);

// Filters
document.querySelectorAll('.filters-sidebar a').forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.filter;
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = category === 'all' || card.dataset.category === category ? 'block' : 'none';
        });
    });
});