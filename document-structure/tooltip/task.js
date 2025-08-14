const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

tooltips.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        if (activeTooltip && activeTooltip.trigger === this) {
            activeTooltip.elem.remove();
            activeTooltip = null;
            return;
        }

        // Проверяем есть-ли уже открытая подсказка для другого элемента и удаляем её
        if (activeTooltip) {
            activeTooltip.elem.remove();
            activeTooltip = null;
        }

        const tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip tooltip_active';
        tooltipElem.textContent = this.getAttribute('title');

        document.body.appendChild(tooltipElem);

        const coords = this.getBoundingClientRect();
        tooltipElem.style.left = coords.left + 'px';
        tooltipElem.style.top = coords.bottom + 'px';

        activeTooltip = { elem: tooltipElem, trigger: this };
    });
});
