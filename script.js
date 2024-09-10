let userChoice = "";
let aiChoice = "";
let winner = "";

// To Display Rules of the game
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('rulesModal');
    const closeModal = document.getElementById('closeModal');

    modal.classList.add('show');

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});

// Generating random choice from the system 
function randomGen() {
    const random = Math.random() * 3;

    if (random > 0 && random <= 1) {
        aiChoice = "Ball";
    } else if (random > 1 && random <= 2) {
        aiChoice = "Bat";
    } else {
        aiChoice = "Wicket";
    }
}

