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

// Отправлка голоса на сервер
function sendVote(pollId, answerIndex) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`vote=${pollId}&answer=${answerIndex}`);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            const result = JSON.parse(xhr.responseText);
            showResults(result.stat);
        }
    };
}

// Вычисление % и вывод статистики 
function showResults(stat) {
    pollAnswers.innerHTML = "";

    const totalVotes = stat.reduce((sum, item) => sum + item.votes, 0);

    stat.forEach(item => {
        const percent = ((item.votes / totalVotes) * 100).toFixed(1);

        const div = document.createElement("div");
        div.textContent = `${item.answer}: ${percent}% (голосов - ${item.votes})`;

        pollAnswers.appendChild(div);
    });
}

loadPoll();
