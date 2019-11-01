const {
    ipcRenderer,
    shell
} = require('electron');

const process = require('process');

let linkToClose = document.querySelector('#link-close');
let linkGit = document.querySelector('#link-git');
let electronVersion = document.querySelector('.electron-version');

linkToClose.addEventListener('click', () => {
    ipcRenderer.send('close-about');
});

linkGit.addEventListener('click', () => {
    shell.openExternal('https://github.com/FilipedePaula');
});

window.onload = () => {
    electronVersion.textContent = process.versions.electron;
}