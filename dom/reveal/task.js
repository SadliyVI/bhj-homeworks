function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            el.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll()