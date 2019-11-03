const { app, Menu } = require("electron");
const { createWindow } = require("./electron-starter");

function setAppMenu() {
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "New Winbdow",
          accelerator: "CmdOrCtrl+N",
          click: createWindow
        },
        { type: "separator" },
        { label: "Close", accelerator: "CmdOrCtrl+W", role: "close" }
      ]
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          role: "copy"
        },
        {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          role: "paste"
        },
        {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          role: "cut"
        },
        {
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          role: "selectall"
        }
      ]
    },
    {
      label: "View",
      submenu: [
        {
          label: "Reload",
          accelerator: "CmdOrCtrl+R",
          click: (item, focusedWindow) =>
            focusedWindow && focusedWindow.reload()
        },
        {
          label: "Togle DevTools",
          accelerator:
            process.platform === "darwin" ? "Alt+Command+I" : "Ctrl+Shift+I",
          click: (item, focusedWindow) =>
            focusedWindow && focusedWindow.toggleDevTools()
        }
      ]
    }
  ];

  //macOS인 경우를 뜻함
  if (process.platform === "darwin") {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: "about" },
        { type: "seperator" },
        { role: "services", submenu: [] },
        { type: "seperator" },
        { role: "hide" },
        { role: "hideothers" },
        { role: "unhide" },
        { type: "seperator" },
        { role: "quit" }
      ]
    });

    template.push({
      role: "window",
      submenu: [{ role: "minimize" }, { role: "zoom" }]
    });
  }

  const appMenu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(appMenu);
}

module.exports = setAppMenu;
