const fs = require("fs");
const  path = require("path");
const { Transform } = require("stream");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

const readStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });
const writeStream = fs.createWriteStream(outputFilePath);

const upperCaseTransform = new (require("stream")).Transform({
    transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString().toUpperCase();
        this.push(transformedChunk);
        callback(null, transformedChunk);
    }
});

readStream.pipe(upperCaseTransform).pipe(writeStream);