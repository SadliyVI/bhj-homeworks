const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

function loadPoll() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            pollTitle.textContent = data.data.title;
            pollAnswers.innerHTML = "";

            data.data.answers.forEach((answer, index) => {
                const button = document.createElement("button");
                button.classList.add("poll__answer");
                button.textContent = answer;

                button.addEventListener("click", () => {
                    alert("Спасибо, ваш голос засчитан!");
                    sendVote(data.id, index);
                });

                pollAnswers.appendChild(button);
            });
        }
    };
}

loadPoll();
