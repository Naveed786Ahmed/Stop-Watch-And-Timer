// StopWatch
let container = document.getElementById("containers")
let timerContainer = document.getElementById("timer-containers")
let timeDisplay = document.getElementById("display")
let start = document.getElementById("start")
let stops = document.getElementById("stop")
let reset = document.getElementById("reset")
let stopWatch = document.getElementById("stopWatch")
let timers = document.getElementById("timer") 
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

start.addEventListener("click", () => {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 75);
        isRunning = true
    }
})

stops.addEventListener("click", () => {
    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRunning = false
    }
})

reset.addEventListener("click", () => {
    clearInterval(timer)
    startTime = 0;
    elapsedTime = 0; 
    isRunning = false;

    timeDisplay.textContent = `00:00:00`
})

const update = function() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime    

    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = pad(hours)
    minutes = pad(minutes)
    seconds = pad(seconds)

    timeDisplay.textContent = `${hours}: ${minutes}: ${seconds}`

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}

function display1(){
    container.style.display = "none"
    timerContainer.style.display = "block"
}

function display2(){
    timerContainer.style.display = "none"
    container.style.display = "block"
}

// Timer

let tym;
let totalTime;
let remainingTime;

let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timer-display');
let setTimerButton = document.getElementById('set-timer');
let startTimerButton = document.getElementById('start-timer');
let stopTimerButton = document.getElementById('stop-timer');
let resetTimerButton = document.getElementById('reset-timer');

setTimerButton.addEventListener('click', () => {
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    totalTime = (minutes * 60) + seconds;
    remainingTime = totalTime;
    updateDisplay(remainingTime);
    startTimerButton.disabled = false;
    resetTimerButton.disabled = false;
});

startTimerButton.addEventListener('click', () => {
    tym = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay(remainingTime);
        } else {
            clearInterval(tym);
            alert('Time is up!');
        }
    }, 1000);
    startTimerButton.disabled = true;
    stopTimerButton.disabled = false;
});

stopTimerButton.addEventListener('click', () => {
    clearInterval(tym);
    startTimerButton.disabled = false;
    stopTimerButton.disabled = true;
});

resetTimerButton.addEventListener('click', () => {
    clearInterval(tym);
    remainingTime = totalTime;
    updateDisplay(remainingTime);
    startTimerButton.disabled = false;
    stopTimerButton.disabled = true;
    resetTimerButton.disabled = true;
});

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}





