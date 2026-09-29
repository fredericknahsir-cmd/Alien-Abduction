const person = document.getElementById("person");
const ufo = document.getElementById("ufo");
const beam = document.getElementById("beam");
const message = document.getElementById("message");
const title = document.getElementById("title");
const scene = document.getElementById("scene");

const hideBtn = document.getElementById("hideBtn");
const lightsBtn = document.getElementById("lightsBtn");
const runBtn = document.getElementById("runBtn");
const waveBtn = document.getElementById("waveBtn");

let gameOver = false;

setTimeout(function () {
    message.textContent = "The UFO has stopped above you. Choose quickly!";
    beam.classList.add("active");
    person.classList.add("panic");
    ufo.classList.add("scanning")
}, 4200);


hideBtn.addEventListener("click", function() {
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
window.style.backgroundColor = "#111";
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

function abductPerson() {
    beam.classList.add("active");
    person.classList.add("abducted");

    setTimeoutmeout(function () {
        loseGame("You have been abducted. Probably should not have waved.");
    }, 3000);
}

function winGame(finalMessage) {
    gameOver = true;
    message.textContent = "YOU SURVIVED!";
     ufo.classList.remove("scanning");
    disableButtons();

    setTimeout(function () {
        ufo.classList.add("fly-away");
       
    }, 500);
}

function loseGame (finalmessage) {
    gameOver = true;
    message.textContent = finalMessage;
    title.textContent = "THEY GOT YOU!";
     ufo.classList.remove("scanning");
    scene.classList.add("screen-shake");
    disableButtons();
}
function disableButtons() {
    hideBtn.disabled = true;
    lightsBtn.disabled = true;
    runBtn.disabled = true;
    waveBtn.disabled = true;
}
const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", function () {
    location.reload();
});