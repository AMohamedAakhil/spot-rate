
// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ipcRenderer', {
    logMessage: (message) => {
 
          ipcRenderer.send('notify', message);
    }
});
