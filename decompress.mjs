import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

export const decompress = async ( fileFrom, fileTo ) => {
    const stream = createReadStream(fileFrom);
    stream
        .pipe(createBrotliDecompress())
        .pipe(createWriteStream(fileTo))
        .on("finish", () =>
            console.log(`Successfully decompressed the file at ${fileFrom}`)
        );
    };
    