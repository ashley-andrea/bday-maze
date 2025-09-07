// main.js
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 800,
    frame: false,            // we’ll build our own buttons
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("maze.html");
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());

// IPC handlers for minimize/close
ipcMain.on("window-close", () => {
    app.quit();  
});

ipcMain.on('window-minimize', () => {
    if (win) {
        win.minimize();
    }
});  