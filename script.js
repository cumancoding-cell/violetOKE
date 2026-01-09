document.addEventListener("DOMContentLoaded", () => {

let power = 100;
let doorClosed = false;

const positions = ["Stage", "Hall", "Office"];
let animatronicIndex = 0;
let currentCamera = "Stage";

const powerText = document.getElementById("power");
const cameraText = document.getElementById("cameraText");
const doorStatus = document.getElementById("doorStatus");
const animText = document.getElementById("animatronicText");

// Ganti kamera
window.changeCamera = function(room) {
    currentCamera = room;
    cameraText.textContent = "Camera: " + room;
};

// Toggle pintu
window.toggleDoor = function() {
    doorClosed = !doorClosed;
    doorStatus.textContent = doorClosed ? "Door: CLOSED" : "Door: OPEN";
    power -= 1;
    updatePower();
};

// Update power
function updatePower() {
    power = Math.max(0, power);
    powerText.textContent = power;

    if (power === 0) {
        alert("Power habis! Game Over!");
        location.reload();
    }
}

// Gerakan animatronic
function moveAnimatronic() {
    if (currentCamera === positions[animatronicIndex]) return;

    animatronicIndex++;

    if (animatronicIndex >= positions.length) {
        if (!doorClosed) {
            alert("JUMPSCARE! Freddy got you!");
            location.reload();
        } else {
            animatronicIndex = 1;
        }
    }

    animText.textContent = "Freddy: " + positions[animatronicIndex];
}

setInterval(moveAnimatronic, 6000);

setInterval(() => {
    power -= doorClosed ? 2 : 1;
    updatePower();
}, 2000);

});
