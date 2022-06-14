import * as fs from 'fs';
import path from 'path';
export const create = async (currentDir, fileName) => {

    try {
        await fs.writeFile([currentDir, fileName].join(path.sep), '', function (err) {
            if (err) throw 'Operation failed\n';
        });
    } catch (err) {
     process.stdout.write('Operation failed\n')
    }
};
