const { BrowserWindow, app } = require('electron');

const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // mainWindow.loadURL('http://localhost:3001');
  mainWindow.loadFile(path.join(__dirname, '/../../build/index.html'))
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){ // macOS
      app.quit();
    } 
  });
});

module.exports = createWindow;
