import * as fs from 'fs';
import path from 'path';

export const rn = async (filepath, newName) => {
    const _path = path.resolve(process.cwd(), filepath)
    try {
        await fs.rename( filepath, newName, function (err, data) {
            if (err) throw err;
            console.log('File is renamed!');
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('Operation failed');

        } else {
            throw err;
        }
    }
};
