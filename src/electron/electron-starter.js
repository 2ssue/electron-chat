const setAppMenu = require('./setAppMenu');

const electron = require('electron');
const app = electron.app;
const createWindow = require('./createWindow');

app.on('ready', () => {
  setAppMenu();
  createWindow();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
