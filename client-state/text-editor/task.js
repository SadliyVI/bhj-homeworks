
const STORAGE_KEY = 'text-editor:value';

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('editor');
    if (!textarea) return;

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
            textarea.value = saved;
        }
    } catch (e) {
        console.warn('localStorage недоступен:', e);
    }

    textarea.addEventListener('input', () => {
        try {
            localStorage.setItem(STORAGE_KEY, textarea.value);
        } catch (e) {
            console.warn('Не удалось сохранить в localStorage:', e);
        }
    });
});
