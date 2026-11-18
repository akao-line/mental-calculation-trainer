var ans;
var startTime, interval;
var lastTime = 0;
var isGameRunning = false;

function generate() {
    var one = Math.floor(Math.random() * 20) + 1;
    var two = Math.floor(Math.random() * 20) + 1;
    ans = one + two;

    document.getElementById("sum").innerHTML = one + " + " + two;
    document.getElementById("result").innerHTML = "";
    document.getElementById("userAnswer").value = "";
    document.getElementById("userAnswer").focus();

    startStopwatch();
    isGameRunning = true;
}

function reveal() {
    if (!isGameRunning) {
        generate();
    }
}

function startStopwatch() {
    startTime = new Date().getTime();
    interval = setInterval(function () {
        var elapsed = (new Date().getTime() - startTime) / 1000;
        document.getElementById("stopwatch").innerHTML = "Time: " + elapsed.toFixed(2) + " seconds";
    }, 100);
}

function stopStopwatch() {
    clearInterval(interval);
    var endTime = new Date().getTime();
    lastTime = (endTime - startTime) / 1000;
    document.getElementById("lastTime").innerHTML = "Last Time: " + lastTime.toFixed(2) + " seconds";
}

function checkAnswer() {
    if (isGameRunning) {
        var userAnswer = parseInt(document.getElementById("userAnswer").value);
        if (userAnswer === ans) {
            document.getElementById("result").innerHTML = "Correct!";
            stopStopwatch(); // Stop stopwatch when correct
            isGameRunning = false; // Mark game as ended
        } else {
            document.getElementById("result").innerHTML = "Incorrect, try again!";
        }
    } else {
        document.getElementById("result").innerHTML = "Click 'Reveal' to start a new problem!";
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
    if (event.key === " ") {
        reveal();
        event.preventDefault();
    }
});
