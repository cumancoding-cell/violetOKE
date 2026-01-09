let power = 100;
let doorClosed = false;
let animatronicPosition = "Stage";

const powerText = document.getElementById("power");
const cameraText = document.getElementById("cameraText");
const doorStatus = document.getElementById("doorStatus");

// Ganti kamera
function changeCamera(room) {
    cameraText.textContent = "Camera: " + room;
    power -= 1;
    updatePower();
}

// Buka / Tutup pintu
function toggleDoor() {
    doorClosed = !doorClosed;
    doorStatus.textContent = doorClosed ? "Door: CLOSED" : "Door: OPEN";
    power -= 2;
    updatePower();
}

// Update power
function updatePower() {
    if (power <= 0) {
        alert("Power Habis! Game Over!");
        location.reload();
    }
    powerText.textContent = power;
}

// Gerakan animatronic
function moveAnimatronic() {
    const positions = ["Stage", "Hall", "Office"];
    animatronicPosition = positions[Math.floor(Math.random() * positions.length)];

    if (animatronicPosition === "Office" && !doorClosed) {
        alert("JUMPSCARE! Freddy got you!");
        location.reload();
    }
}

// Loop animatronic setiap 5 detik
setInterval(moveAnimatronic, 5000);

// Power berkurang setiap detik
setInterval(() => {
    power -= doorClosed ? 2 : 1;
    updatePower();
}, 1000);
