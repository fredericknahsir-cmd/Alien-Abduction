const person = document.getElementById("person");
const ufo = document.getElementById("ufo");
const beam = document.getElementById("beam");
const message = document.getElementById("message");
const title = document.getElementById("title");
const scene = document.getElementById("scene");

const hideBtn = document.getElementById("hidebtn");
const lightsBtn = document.getElementById("lightsBtn");
const runBtn = document.getElementById("runBtn");
const waveBtn = document.getElementById("waveBtn");

let gameOver = false;

setTimeout(function () {
    message.textContent = "The UFO has stopped above you. Choose quickly!";
    beam.classList.add("active");
}, 4200);
person.classList.add("panic");

hideBtn.addEventListener("click",function() {
    if (gameOver) return;

    message.textContent = "You dive behind the building. The aliens lose sight of you";
    person.classList.remove("panic");
    person.classList.add("hidden-paragraph");
    beam.classList.remove("active");

    winGame("You survive by hiding");
});

lightsBtn.addEventListener("click", function(){
if (gameOver) return;

document.querySelectorAll(".window").forEach(function (window) {
    window.Style.backgroundColor = "#111";
});

message.textContent = "The building goes dark. The UFO scans the area...";
beam.classList.remove("active");
person.classList.remove("panic");
winGame("The aliens moved on. You survived!");
});

runBtn.addEventListener("click", function () {
    if (gameOver) return;
message.textContent = "RUN!!!";
person.classList.remove("panic");
person.classList.add("running");

setTimeout(function() {
beam.classList.remove("active");
winGame("You escaped the beam just in time!");
}, 1400);
});

waveBtn.addEventListener("click", function () {
    if (gameOver) return;

    message.textContent = "You waved at UFO. It definitely noticed you.";
    person.classList.remove("panic");
    abductPerson();
});