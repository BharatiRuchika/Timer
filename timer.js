// Get references to HTML elements
const startEle = document.getElementById('start');
const stopEle = document.getElementById('stop');
const secondsEle = document.getElementById('seconds');
const resetEle = document.getElementById('reset');
const hoursEle = document.getElementById('hours');
const minutesEle = document.getElementById('minutes');

//declaring global scoped variables
let timer;
let minutes = 0;
let seconds = 0;
let hours = 0;
let isStart = false;

//function to update the time
function updateTime() {
    minutesEle.textContent = String(minutes).padStart(2, '0');
    secondsEle.textContent = String(seconds).padStart(2, '0');
    hoursEle.textContent = String(hours).padStart(2, '0');
}

// function to start the timer
function startTimer() {
    if (!isStart) {
        isStart = true;
        timer = setInterval(function () {
            if (seconds === 59) {
                if (minutes === 59) {
                      seconds = 0;
                      minutes = 0;   
                      hours++;
                } else {
                    minutes++;
                    seconds = 0;
                }
            }else{
                seconds++;
            }
            updateTime();
        }, 1000);
    }
}

// function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isStart = false;
    minutes = 0;
    seconds = 0;
    updateTime();
}

//function to stop the timer
function stopTimer() {
    clearInterval(timer);
    isStart = false;
}

// Add event listeners to start,stop and reset buttons 
startEle.addEventListener('click', startTimer);
resetEle.addEventListener('click', resetTimer);
stopEle.addEventListener('click', stopTimer);