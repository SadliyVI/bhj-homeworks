// Стандартный вариант
/*
let timerElement = document.getElementById('timer');
let timeLeft = parseInt(timerElement.textContent);

let countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе');
  }
}, 1000);
*/

// Повышенный уровень сложности #1
/*
const timerElement = document.getElementById('timer');

// Задаём начальное время в секундах (например, 4 часа 25 минут 19 секунд)
let totalSeconds = 4 * 3600 + 25 * 60 + 19;

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(totalSeconds);
  if (totalSeconds <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе');
  }
  totalSeconds--;
}
updateTimer();
const countdown = setInterval(updateTimer, 1000);
*/

// Повышенный уровень сложности #2

const timerElement = document.getElementById('timer');
let totalSeconds = 10;

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(totalSeconds);
  if (totalSeconds <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе');
    window.location.href = 'https://drive.google.com/file/d/1oI1p32WMo67d_UkwBO0rNcXqCJ6G7gB9/view?usp=sharing';
  }
  totalSeconds--;
}
updateTimer();
const countdown = setInterval(updateTimer, 1000);