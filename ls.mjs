import fs from 'fs';

export const ls = (currentDir) => {
    const directoryPath = currentDir;
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Operation failed');
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
}
