const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("file");
    if (!fileInput.files.length) {
        alert("Выберите файл!");
        return;
    }

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percent = event.loaded / event.total;
            progress.value = percent;
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert("Файл успешно загружен!");
            progress.value = 1;
        } else {
            alert("Ошибка загрузки: " + xhr.status);
        }
    };

    xhr.onerror = function () {
        alert("Ошибка сети при загрузке файла");
    };

    xhr.send(formData);
});
