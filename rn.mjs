import * as fs from 'fs';
import path from 'path';

export const rn = async (fileName, newName, currentDir) => {

    try {
        await fs.rename(currentDir + path.sep + fileName, newName, function (err, data) {
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
