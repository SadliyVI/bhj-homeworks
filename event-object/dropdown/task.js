document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');// Ожидание загрузки DOM

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const links = dropdown.querySelectorAll('.dropdown__link');

        // Переключение видимости списка
        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');
        });

        // Выбор пункта меню
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Запрет переход по ссылке
                valueElement.textContent = link.textContent;
                listElement.classList.remove('dropdown__list_active');
            });
        });

        // Закрытие списка при клике не на кнопке
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                listElement.classList.remove('dropdown__list_active');
            }
        });
    });
});
