const fs = require('fs');
const { Transform } = require('stream');

class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    this.push(upperChunk);
    callback();
    }
}

const readStream = fs.createReadStream('big.txt');
const writeStream = fs.createWriteStream('big_uppercase.txt');
const upperfromStream = new UpperCaseTransform();

readStream
    .pipe(upperfromStream)
    .pipe(writeStream)

writeStream.on('finish', () => {
    console.log('Готово! Файл big_uppercase.txt создан');
});