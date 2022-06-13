import path from 'path';
import fs from 'fs';
import { rl } from './app.mjs';
import { read } from './read.mjs';
import { create } from './create.mjs';


export const switcher = (uInput) => {
    const firstArg = uInput.trim().split(' ')[0];
    const secondArg = uInput.trim().split(' ')[1];
    const thirdArg = uInput.trim().split(' ')[2];

    console.log("You are currently in: " + process.cwd());

    if (firstArg == '.exit') rl.close();
    else {
        switch (firstArg) {
            case 'up':
                let myDir = process.cwd() + '';
                try {
                    if (fs.stat(process.chdir(myDir.split(path.sep).slice(0, -1).join(path.sep)).isDirectory())) {
                        process.chdir(myDir.split(path.sep).slice(0, -1).join(path.sep));
                    } else console.log('Operation failed');
                } catch (err) {
                    console.log('Operation failed');
                }
                break;
            case 'ls':
                const directoryPath = process.cwd();
                fs.readdir(directoryPath, function (err, files) {
                    if (err) {
                        return console.log('Operation failed');
                    }
                    files.forEach(function (file) {
                        console.log(file);
                    });
                });
                console.log("You are currently in: " + process.cwd());
                break;
            case 'cd':
                let myDirCD = process.cwd() + '';
                try {
                    if (secondArg === '..') {
                        if (fs.stat(process.chdir(myDirCD.split(path.sep).slice(0, -1).join(path.sep)).isDirectory())) {
                            process.chdir(myDir.split(path.sep).slice(0, -1).join(path.sep));
                        } else console.log('Operation failed');
                    }
                    if (secondArg && secondArg !== '..') process.chdir([myDirCD, secondArg].join(path.sep))
                } catch (err) {
                    console.log('Operation failed');
                }
                break;
            case 'cat':
                try {
                    read(secondArg);
                } catch (e) {
                    console.log('Operation failed');
                }
                break;
            case 'add':
                try {
                    create(process.cwd(), secondArg);
                } catch (e) {
                    console.log('Operation failed');
                }
                break;
            default:
                rl.setPrompt('Invalid input! Please try again.\n');
                rl.prompt();
                break;
        }
    }
    if (uInput === '.exit') return;
    else console.log("You are currently in: " + process.cwd());
}
