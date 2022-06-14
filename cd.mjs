import path from 'path';

export const cd = (currentDir, secondArg) => {
    let myDirCD = currentDir + '';
    try {
        if (secondArg === '..') {
            if (!(process.chdir(myDirCD.split(path.sep).slice(0, -1).join(path.sep)).includes('.'))) {
                process.chdir(myDir.split(path.sep).slice(0, -1).join(path.sep));
            } else console.log('Operation failed');
        }
        if (secondArg && secondArg !== '..') process.chdir([myDirCD, secondArg].join(path.sep))
    } catch (err) {
      // console.log('Operation failed');
    }
}