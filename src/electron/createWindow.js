const { BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // mainWindow.loadURL('http://localhost:3000');
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/../../build/index.html'),
      protocol: 'file',
      slashes: true,
    }),
  );
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

module.exports = createWindow;
