import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';

export const compress = async ( fileFrom, fileTo ) => {
    const stream = createReadStream(fileFrom);
    stream
        .pipe(createBrotliCompress())
        .pipe(createWriteStream(fileTo))
        .on("finish", () =>
            console.log(`Successfully compressed the file at ${fileFrom}`)
        );
};
