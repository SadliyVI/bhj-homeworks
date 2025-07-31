document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Удаляем активные классы у всех вкладок и содержимого
            tabs.forEach(t => t.classList.remove('tab_active'));
            contents.forEach(c => c.classList.remove('tab__content_active'));

            // Добавляем активный класс к выбранной вкладке и соответствующему содержимому
            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        });
    });
});
