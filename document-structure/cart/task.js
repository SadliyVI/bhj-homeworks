const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const valueElem = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');

    decBtn.addEventListener('click', () => {
        let value = parseInt(valueElem.textContent);
        if (value > 1) {
            valueElem.textContent = value - 1;
        }
    });

    incBtn.addEventListener('click', () => {
        let value = parseInt(valueElem.textContent);
        valueElem.textContent = value + 1;
    });

    addBtn.addEventListener('click', () => {
        const id = product.dataset.id;
        const imageSrc = product.querySelector('.product__image').src;
        const quantity = parseInt(valueElem.textContent);

        let cartItem = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

        if (cartItem) {
            let countElem = cartItem.querySelector('.cart__product-count');
            countElem.textContent = parseInt(countElem.textContent) + quantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = id;

            const img = document.createElement('img');
            img.classList.add('cart__product-image');
            img.src = imageSrc;

            const count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.textContent = quantity;

            cartProduct.appendChild(img);
            cartProduct.appendChild(count);
            cartProducts.appendChild(cartProduct);
        }
        
        valueElem.textContent = 1;
    });
});
