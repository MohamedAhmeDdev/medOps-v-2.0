// preload.js

const { contextBridge, ipcRenderer } = require('electron');

// Expose custom API to the renderer process
contextBridge.exposeInMainWorld('myAPI', {
  sendToMain: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  receiveFromMain: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => {
      callback(...args);
    });
  }
});
