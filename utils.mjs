import path from 'path';
import fs from 'fs';
import { rl } from './app.mjs';
import { read } from './read.mjs';
import { create } from './create.mjs';
import { cd } from './cd.mjs';
import { ls } from './ls.mjs';
import { rn } from './rn.mjs';
import { rm } from './delete.mjs';


export const switcher = (uInput) => {
    const firstArg = uInput.trim().split(' ')[0];
    const secondArg = uInput.trim().split(' ')[1];
    const thirdArg = uInput.trim().split(' ')[2];

    console.log("You are currently in: " + process.cwd());

    if (firstArg == '.exit') rl.close();
    else {
        switch (firstArg) {
            case 'up':
                cd(process.cwd(), '..')
                break;
            case 'ls':
                ls(process.cwd());
                break;
            case 'cd':
                cd(process.cwd(), secondArg)
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
            case 'rn': 
            rn(secondArg, newName, process.swd());
            break;
            case 'rm': 
            rm(secondArg);
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
