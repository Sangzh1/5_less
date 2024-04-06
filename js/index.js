let timer;
let minutes = 0;
let seconds = 0;
let isTimerRunning = false;

const timerDisplay = document.querySelector('.timer');

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;

  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isTimerRunning = false;
    alert('Taymer tugadi!');
  }
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
