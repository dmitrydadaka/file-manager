import * as readline from 'readline';
import { switcher } from './utils.mjs';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name = '';

if (process.argv.slice(2)[0].startsWith('--username=')) {
    name = process.argv.slice(2)[0].slice(process.argv.slice(2)[0].indexOf('=') + 1);
    process.stdout.write(`Welcome to the File Manager, ${name}!\n`)
} else process.stdout.write(`Welcome to the File Manager!\n`)

rl.on('line', (uInput) => {
    switcher(uInput);
});

rl.on('close', () => {
    process.stdout.write('Thank you for using File Manager' + `${ name ? ', ' + name : ''}!`);
});
