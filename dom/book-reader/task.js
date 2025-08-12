// Простой вариант реализации функционала смены размера шрифта

// document.addEventListener('DOMContentLoaded', () => {
//     const book = document.getElementById('book');
//     const fontSizeControls = document.querySelectorAll('.font-size');

//     fontSizeControls.forEach(control => {
//         control.addEventListener('click', event => {
//             event.preventDefault();

//             fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

//             control.classList.add('font-size_active');

//             book.classList.remove('book_fs-small', 'book_fs-big');

//             const size = control.dataset.size;

//             if (size === 'small') {
//                 book.classList.add('book_fs-small');
//             } else if (size === 'big') {
//                 book.classList.add('book_fs-big');
//             }
//         });
//     });
// });

// Усложенный вариант реализации функционала смены размера шрифта, цвета текста и фона

document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // === 1. Смена размера шрифта ===
    const fontSizeControls = document.querySelectorAll('.font-size');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', event => {
            event.preventDefault();

            fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));
            control.classList.add('font-size_active');

            book.classList.remove('book_fs-small', 'book_fs-big');

            const size = control.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });

    // === 2. Смена цвета текста ===
    const textColorControls = document.querySelectorAll('[data-text-color]');

    textColorControls.forEach(control => {
        control.addEventListener('click', event => {
            event.preventDefault();

            textColorControls.forEach(btn => btn.classList.remove('color_active'));
            control.classList.add('color_active');

            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            const textColor = control.dataset.textColor;
            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
        });
    });

    // === 3. Смена фона ===
    const bgColorControls = document.querySelectorAll('[data-bg-color]');

    bgColorControls.forEach(control => {
        control.addEventListener('click', event => {
            event.preventDefault();

            bgColorControls.forEach(btn => btn.classList.remove('color_active'));
            control.classList.add('color_active');

            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            const bgColor = control.dataset.bgColor;
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
        });
    });
});