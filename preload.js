
// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ipcRenderer', {
    logMessage: {
        message(message) {
            ipcRenderer.send('notify', message);
        }
    }
});
