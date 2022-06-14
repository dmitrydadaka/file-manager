import * as crypto from 'crypto';
import * as fs from 'fs';

export const calculateHash = async () => {
    return fs.readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf-8', function (err, data) {
        if (err) throw err;
        const hashSum = crypto.createHash('sha256');
        const hex = hashSum.update(data).digest('hex');
        console.log(hex);
        return hex;
    });

};
calculateHash();
