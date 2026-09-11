const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
	});
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));
