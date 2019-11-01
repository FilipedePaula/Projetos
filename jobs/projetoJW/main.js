const {
    app,
    BrowserWindow,
    ipcMain,
    dialog
} = require('electron');

let mainWindow;
let aboutWindow = null;
let controlsWindow = null;
let max = false;

app.on('ready', createMainWindow);

ipcMain.on('open-about', () => {
    if (aboutWindow == null) {
        aboutWindow = new BrowserWindow({
            width: 300,
            height: 350,
            alwaysOnTop: true,
            frame: false
        });
        aboutWindow.on('closed', () => {
            aboutWindow = null;
        });
    }
    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
});

ipcMain.on('close-about', () => {
    aboutWindow.close();
});

ipcMain.on('open-controls', () => {
    if (controlsWindow == null) {
        controlsWindow = new BrowserWindow({
            width: 420,
            height: 280
        });

        controlsWindow.on('close', (e) => {
            e.preventDefault();
            controlsWindow.alwaysOnTop = false;
            confirmation(controlsWindow);
        });

        controlsWindow.on('closed', () => {
            controlsWindow = null;
        });

    }

    controlsWindow.loadURL(`file://${__dirname}/app/controls.html`);
    controlsWindow.setMenuBarVisibility(false);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createMainWindow();
});

ipcMain.on('start-timer', () => {
    controlsWindow.webContents.send('start');
    mainWindow.webContents.send('start');
});

ipcMain.on('stop-timer', () => {
    controlsWindow.webContents.send('stop');
    mainWindow.webContents.send('stop');
});

ipcMain.on('Restart-timer', () => {
    controlsWindow.webContents.send('restart');
    mainWindow.webContents.send('restart');
});

ipcMain.on('maximize-window', () => {
    if (!max) {

        mainWindow.setFullScreen(true);
        max = true;
    } else {
        mainWindow.setFullScreen(false);
        max = false;
    }
});


function createMainWindow() {

    mainWindow = new BrowserWindow({
        width: 900,
        height: 700
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.setMenuBarVisibility(false);

    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

function confirmation(window) {
    let options = {
        buttons: ["Não", "Sim"],
        message: "Você realmente quer fechar toda a aplicação?"
    }
    let response = dialog.showMessageBox(options);
    if (response === 1) {
        window.destroy();
        app.quit();
    } else {
        return false;
    }
}