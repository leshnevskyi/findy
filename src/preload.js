import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('api', {
  async getDirents() {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('dirents-request');
      ipcRenderer.on('dirents-data', (_, reply) => {
        Array.isArray(reply) ? resolve(reply) : reject(reply);
      });
    });
  }
});