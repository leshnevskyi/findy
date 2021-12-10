import {contextBridge, ipcRenderer} from 'electron';
import {watch} from 'fs';

contextBridge.exposeInMainWorld('api', {
  async getDirents(path) {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('dirents-request', {path});
      ipcRenderer.on('dirents-data', (_, reply) => {
        Array.isArray(reply) ? resolve(reply) : reject(reply);
      });
    });
  },

  watch,
});