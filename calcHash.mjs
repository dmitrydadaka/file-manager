import * as crypto from 'crypto';
import * as fs from 'fs';

export const hash = async ( pathToFile ) => {
    return fs.readFile( pathToFile, 'utf-8', function (err, data) {
        if (err) throw err;
        const hashSum = crypto.createHash('sha256');
        const hex = hashSum.update(data).digest('hex');
        console.log(hex);
        return hex;
    });

};
