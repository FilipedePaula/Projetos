const {
    ipcRenderer
} = require('electron');

const timerModule = require('./js/timer');

let $ = document.querySelector.bind(document);

let startBtn = $('#start');
let stopBtn = $('#pause');
let restartBtn = $('#restart');
let maximizeBtn = $('#maximize');
let timerControl = $('.timer');


startBtn.addEventListener('click', () => {
    ipcRenderer.send('start-timer');
});

ipcRenderer.on('start', () => {
    timerModule.start(timerControl);
});

stopBtn.addEventListener('click', () => {
    ipcRenderer.send('stop-timer');

});

ipcRenderer.on('stop', () => {
    timerModule.stop();
});

restartBtn.addEventListener('click', () => {
    ipcRenderer.send('Restart-timer');
});

ipcRenderer.on('restart', () => {
    timerModule.restart(timerControl);
});

maximizeBtn.addEventListener('click', () => {
    ipcRenderer.send('maximize-window');
});