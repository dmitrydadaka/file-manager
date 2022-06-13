
import path from 'path';
import fs from 'fs';
import * as readline from 'readline';
import { switcher } from './utils.mjs';

 export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputArgs = process.argv.slice(2)
rl.question(`Welcome to the File Manager, ${inputArgs[0].slice(inputArgs[0].indexOf('=') + 1)}!\n`, (uInput) => {
    switcher(uInput);
});
rl.on('line', (uInput) => {
 switcher(uInput);
});

rl.on('close', () => {
    process.stdout.write(`Thank you for using File Manager, ${inputArgs[0].slice(inputArgs[0].indexOf('=') + 1)}!`);
});
