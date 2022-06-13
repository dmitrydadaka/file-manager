import * as readline from 'readline';
import path from 'path';
import fs from 'fs';
import { rl } from './app.mjs'

export const switcher = (uInput) => {
    console.log("You are currently in: " + process.cwd());

    if (uInput.trim() == 'exit') rl.close();
    else {
        switch (uInput.trim()) {//.slice(0, uInput.indexOf(' '))) {
            case 'up':
                let myDir = process.cwd() + '';
                try {
                    process.chdir(myDir.split(path.sep).slice(0, -1).join(path.sep));
                    console.log("You are currently in: " + process.cwd());

                } catch (err) {
                    console.error('Operation failed');
                }
                break;
            case 'ls':
                const directoryPath = process.cwd();
                fs.readdir(directoryPath, function (err, files) {
                    if (err) {
                        return console.log('Unable to scan directory: ' + err);
                    }
                    files.forEach(function (file) {
                        console.log(file);
                    });
                });
                console.log("You are currently in: " + process.cwd());
                break;
            default:
                rl.setPrompt('Invalid input! Please try again.\n');
                rl.prompt();
                break;
        }
    }
}
/* case 'cd':
    const changeDirCD = process.chdir((process.cwd() + uInput.slice(uInput.indexOf(' '))).split(path.sep).slice(0, -1).join(path.sep));
    try {
        process.chdir(myDir.split(path.sep).slice(0, -1).join(path.sep));
        console.log("You are currently in: " + process.cwd());

    } catch (err) {
        console.error('Operation failed');
    }
    break; */
