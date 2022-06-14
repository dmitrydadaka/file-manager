import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import  path from 'path';

export const rm = async (filePath) => {
    const _path = path.resolve(process.cwd(), filePath);
    try {
        await fs.promises.access(_path);
        await fsPromises.unlink(_path);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('Operation failed');;
        } else {
            throw err;
        }
    }
};
