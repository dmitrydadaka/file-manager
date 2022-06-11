# file-manager
if (uInput.trim() == 'up') {
        let myDir = process.cwd() + '';
        //process.chdir(
        process.chdir(myDir.split(path.sep).slice(0,-1).join(path.sep));
            }