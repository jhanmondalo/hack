const codeElement = document.querySelector('.code');
const codeLines = [
    "Initializing hack...",
    "Bypassing security protocols...",
    "Accessing files...",
    "Data retrieved: 100%",
    "Sending data to external server...",
    "Done.",
    "System compromised.",
    "Warning: Your information is now public!",
];

let i = 0;

function displayCode() {
    if (i < codeLines.length) {
        codeElement.textContent += codeLines[i] + '\n';
        i++;
        setTimeout(displayCode, 2000);
    }
}

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

window.onload = function() {
    enterFullscreen();
    displayCode();
};
