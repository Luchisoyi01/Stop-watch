let timerInterval;
let timerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (timerRunning) {
    clearInterval(timerInterval);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timerInterval = setInterval(updateTime, 1000);
    document.getElementById("startStop").textContent = "Stop";
  }
  timerRunning = !timerRunning;
}
document.getElementById("startStop")
.addEventListener(('click'), ()=>{
  startStop();
});

document.body.addEventListener(('keydown'), () => {
  if (event.key === 'r') {
    reset();
  }
});


document.getElementById("reset")
.addEventListener(('click'), ()=>{
  reset();
});

function reset() {
  clearInterval(timerInterval);
  timerRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startStop").textContent = "Start";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
