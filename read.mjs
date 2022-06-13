import * as fs from 'fs';

export const read = (pathToFile) => {

    let stream = fs.createReadStream(pathToFile);

    stream.on('data', function (data) {
        process.stdout.write(data + '\n');
    });
};
