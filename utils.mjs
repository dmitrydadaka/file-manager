import os from 'os';

import { rl } from './app.mjs';
import { read } from './read.mjs';
import { create } from './create.mjs';
import { cd } from './cd.mjs';
import { ls } from './ls.mjs';
import { rn } from './rn.mjs';
import { rm } from './delete.mjs';
import { cp } from './copy.mjs';
import { compress } from './compress.mjs';
import { decompress } from './decompress.mjs';
import { hash } from './calcHash.mjs';


export const switcher = async (uInput) => {
    const firstArg = uInput.trim().split(' ')[0];
    const secondArg = uInput.trim().split(' ')[1];
    const thirdArg = uInput.trim().split(' ')[2];

    console.log("You are currently in: " + process.cwd());

    if (firstArg == '.exit') rl.close();
    else {
        switch (firstArg) {
            case 'up':
                await cd(process.cwd(), '..')
                break;
            case 'ls':
                await ls(process.cwd());
                break;
            case 'cd':
                await cd(process.cwd(), secondArg)
                break;
            case 'cat':
                try {
                    await read(secondArg);
                } catch (e) {
                    console.log('Operation failed');
                }
                break;
            case 'add':
                try {
                    await create(process.cwd(), secondArg);
                } catch (e) {
                    console.log('Operation failed');
                }
                break;
            case 'rn':
                await rn(secondArg, thirdArg);
                break;
            case 'rm':
                await rm(secondArg);
                break;
            case 'cp':
                await cp(secondArg, thirdArg);
                break;
            case 'mv':
                await cp(secondArg, thirdArg);
                await rm(secondArg);
                break;
            case 'compress':
                await compress(secondArg, thirdArg);
                break;
            case 'decompress':
                await decompress(secondArg, thirdArg);
                break;
            case 'hash':
                await hash(secondArg);
                break;
            case 'os':
                switch (secondArg) {
                    case '--EOL':
                        process.stdout.write(JSON.stringify(os.EOL) + '\n');
                        break;
                    case '--cpus':
                        console.log('Overall amount of CPUS: ', os.cpus().length);
                        for (const el of os.cpus()) {
                            console.log('model and clock rate (in GHz): ', el.model);
                        }
                        break;
                    case '--homedir':
                        console.log(os.homedir())
                        break;
                    case '--username':
                        console.log(os.userInfo().uid);
                        break;
                    case '--architecture':
                        console.log(process.arch)
                        break;
                    default:
                        console.log('Invalid input! Please try again.\n');
                }
                break;
            default:
                rl.setPrompt('Invalid input! Please try again.\n');
                rl.prompt();
                break;
        }
    }
    if (uInput === '.exit') return;
    else console.log("You are currently in: " + process.cwd() + '\n');
}
