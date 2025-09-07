// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myApp", {
  minimize: () => ipcRenderer.send("window-minimize"),
  close:    () => ipcRenderer.send("window-close")
});
