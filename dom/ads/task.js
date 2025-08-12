document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let activeIndex = 0;

        function showNext() {
            cases[activeIndex].classList.remove('rotator__case_active');

            activeIndex = (activeIndex + 1) % cases.length;

            const nextCase = cases[activeIndex];

            nextCase.style.color = nextCase.dataset.color;

            nextCase.classList.add('rotator__case_active');

            setTimeout(showNext, nextCase.dataset.speed);
        }

        const firstCase = cases[activeIndex];
        firstCase.style.color = firstCase.dataset.color;
        setTimeout(showNext, firstCase.dataset.speed);
    });
});
