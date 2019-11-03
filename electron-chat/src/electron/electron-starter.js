const setAppMenu = require("./setAppMenu");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", () => {
  setAppMenu();
  createWindow();
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

module.exports = createWindow;
