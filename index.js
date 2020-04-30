const botViewEl = document.getElementById('bot-container');
const toggler = document.getElementById('toggler');
let isBotOpen = false;

toggler.addEventListener('click', handleToggle);

function handleToggle() {
    toggleBot();
    handleVisibility();
}

function toggleBot() {
    isBotOpen = !isBotOpen;

}

function handleVisibility() {
    if (isBotOpen) {
        // close it
        botViewEl.style.visibility = 'visible';
    } else {
        // open it
        botViewEl.style.visibility = 'hidden';
    }
}