const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    save: (settings) => ipcRenderer.send('save', settings)
});