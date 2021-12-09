import {homedir} from 'os';
import {statSync} from 'fs';
import {readdir} from 'fs/promises';
import {join, extname} from 'path';

async function getDirents(path = homedir()) {
  const dirents = await readdir(path, {withFileTypes: true});

  return dirents.map(dirent => {
    const direntPath = join(path, dirent.name);
    const direntStats = statSync(direntPath);

    return {
      path: direntPath,
      name: dirent.name, 
      dateCreated: direntStats.birthtime, 
      dateModified: direntStats.ctime,
      isDirectory: direntStats.isDirectory(),
      extension: extname(dirent.name) || undefined,
      size: direntStats.size,
    };
  });
}

export {getDirents};