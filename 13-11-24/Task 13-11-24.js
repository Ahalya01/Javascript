function changeColorAfterDelay() {
    setTimeout(() => {
        document.getElementById('colorBox').style.backgroundColor = 'blue';
    }, 5000);
}
window.onload = changeColorAfterDelay;
document.getElementById('changeColorBtn').addEventListener('click', changeColorAfterDelay);
//QUESTION-02
let welcomeTimeout;
function showWelcomeMessage() {
    clearTimeout(welcomeTimeout);
    welcomeTimeout = setTimeout(() => {
        alert('Welcome!');
    }, 2000);
}
document.getElementById('welcomeBtn').addEventListener('click', showWelcomeMessage);
//QUESTION-03
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 10;
    let countdownInterval = setInterval(() => {
        countdownElement.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdownInterval); 
            countdownElement.textContent = "Time's up!"; 
        }
    }, 1000);
}
window.onload = startCountdown;
//QUESTION-04
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    clockElement.textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

