
// Function to set an alarm
function setAlarm() {
    let targetTime = new Date();
    targetTime.setHours(22);
    targetTime.setMinutes(27);
    targetTime.setSeconds(0);

    let timeDifference;
    let alarmInterval = setInterval(function () {
        let currentTime = new Date();
        timeDifference = targetTime - currentTime;
        if (currentTime >= targetTime) {
            clearInterval(alarmInterval);
            alert("Alarm is ringing.......");
        }
    }, timeDifference);
}

setAlarm();

// Using call
let personDetails = {
    id: 1,
    age: 22,
    name: "Ahalya"
};

let displayNames = function (name1, name2, name3, name4, name5, name6, name7) {
    console.log(this.name + " " + name1 + " " + name2 + " " + name3 + " " + name4 + " " + name5 + " " + name6 + " " + name7);
};

displayNames.call(personDetails, "Chinnu", "Nani", "Kicku", "Akshi", "Hema", "Rahul", "Aishu");

// Using apply
let anotherPersonDetails = {
    id: 1,
    age: 22,
    name: "Ahalya"
};

let printNames = function (friend1, friend2, friend3, friend4, friend5) {
    console.log(friend1 + " " + friend2 + " " + friend3 + " " + friend4 + " " + friend5);
};

printNames.apply(anotherPersonDetails, ["Chinnu", "Nani", "Kicku", "Akshi", "Hema"]);

// Using bind
let morePersonDetails = {
    id: 1,
    age: 22,
    name: "Ahalya"
};

let showNames = function (group1, group2, group3, group4) {
    console.log(this.name + " " + group1 + " " + group2 + " " + group3 + " " + group4);
};

let boundFunction = showNames.bind(morePersonDetails, ["Hema", "Rahul", "Aishu"], ["Akshi", "Hema"], ["Chinnu", "Nani"], [12345, 67891]);
boundFunction();

//Example alarm function with sound
// function setAlarmWithSound() {
//     let targetAlarmTime = new Date();
//     targetAlarmTime.setHours(22);
//     targetAlarmTime.setMinutes(51);
//     targetAlarmTime.setSeconds(0);
//     let currentAlarmTime = new Date();
//     let alarmDifference = targetAlarmTime - currentAlarmTime;
//     if (alarmDifference > 0) {
//         setTimeout(function () {
//             let alarmSound = new Audio("Tic-Tac-Mechanical-Alarm-Clock-2-chosic.com_.mp3"); 
//             alarmSound.play();
//             alert("Alarm is ringing.......");
//         }, alarmDifference);
//     } else {
//         alert("The specified time has already passed.");
//     }
// }

// setAlarmWithSound();

