class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');

    this.timerId = null;
    this.timerStarted = false;

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  startTimer(seconds) {
    clearInterval(this.timerId);
    this.timerElement.textContent = seconds;

    this.timerId = setInterval(() => {
      seconds--;
      this.timerElement.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(this.timerId);
        this.fail(); // если время вышло
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      const inputChar = event.key.toLowerCase();
      const currentChar = this.currentSymbol.textContent.toLowerCase();

      // Стартуем таймер при первом вводе
      if (!this.timerStarted) {
        const wordLength = this.wordElement.textContent.length;
        this.startTimer(wordLength);
        this.timerStarted = true;
      }

      if (inputChar === currentChar) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
    }

    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    this.stopTimer();

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  fail() {
    this.stopTimer();

    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.timerStarted = false;
    this.timerElement.textContent = '—';
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map((s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

// Запуск игры
new Game(document.getElementById('game'));
