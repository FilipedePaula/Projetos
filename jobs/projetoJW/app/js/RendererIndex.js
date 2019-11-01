const {
    ipcRenderer
} = require('electron');

const timerModule = require('./js/timer');

let about = document.querySelector('.about');
let controls = document.querySelector('.control-btn');
let timerMain = document.querySelector('.timer-main');

about.addEventListener('click', () => {
    ipcRenderer.send('open-about');
});

controls.addEventListener('click', () => {
    ipcRenderer.send('open-controls');
});

ipcRenderer.on('start', () => {
    timerModule.start(timerMain);
});

ipcRenderer.on('stop', () => {
    timerModule.stop();
});

ipcRenderer.on('restart', () => {
    timerModule.restart(timerMain);
});