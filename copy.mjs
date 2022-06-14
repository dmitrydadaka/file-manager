import { copyFile } from 'fs/promises';
import path from 'path';

export const cp = async (pathToFile, pathToCopy) => {
  const _path = path.resolve(process.cwd(), pathToFile)
  const newPath = path.resolve(process.cwd(), pathToCopy)
    try {
      await copyFile(_path, newPath);
    } catch(err) {
     console.log('Operation failed');
    }
};
