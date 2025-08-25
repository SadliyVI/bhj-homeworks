document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeBtn = modal.querySelector('.modal__close');

    function getCookie(name) {
        const matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, days = 365) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${d.toUTCString()}`;
    }

    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true'); 
    });
});
