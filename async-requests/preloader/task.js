const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const currency = data.response.Valute;

        itemsContainer.innerHTML = '';

        for (let key in currency) {
            const cur = currency[key];

            const item = document.createElement('div');
            item.classList.add('item');

            item.innerHTML = `
        <div class="item__code">${cur.CharCode}</div>
        <div class="item__value">${cur.Value}</div>
        <div class="item__currency">руб.</div>
      `;
            itemsContainer.appendChild(item);
        }
    } else {
        itemsContainer.innerHTML = '<p>Ошибка загрузки данных</p>';
    }

    loader.classList.remove('loader_active');
});
