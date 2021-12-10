import {contextBridge, ipcRenderer} from 'electron';
import {basename} from 'path';
import {watch} from 'fs';
import {homedir} from 'os';

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
  homedir: homedir(),
  getBasename: basename, 
});