document.addEventListener("DOMContentLoaded", () => {
    const signin = document.getElementById("signin");
    const signinForm = document.getElementById("signin__form");

    const welcome = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");
    const logoutBtn = document.getElementById("logout__btn");

    const savedUserId = localStorage.getItem("user_id");
    if (savedUserId) {
        showWelcome(savedUserId);
    } else {
        signin.classList.add("signin_active");
    }

    signinForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const login = signinForm.login.value.trim();
        const password = signinForm.password.value.trim();

        if (!login) {
            alert('Поле "Логин" не заполнено');
            return;
        }
        if (!password) {
            alert('Поле "Пароль" не заполнено');
            return;
        }
        
        const formData = new FormData(signinForm);

        try {
            const response = await fetch(signinForm.action, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Ошибка сети");
            }

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("user_id", data.user_id);
                showWelcome(data.user_id);
            } else {
                alert("Неверный логин/пароль");
            }
        } catch (err) {
            console.error("Ошибка запроса:", err);
            alert("Произошла ошибка. Попробуйте позже.");
        }
    });

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user_id");
        welcome.classList.remove("welcome_active");
        signin.classList.add("signin_active");
        signinForm.reset();
    });

    function showWelcome(id) {
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        userIdSpan.textContent = id;
    }
});
