const fs = require('fs');

const writeStream = fs.createWriteStream('big.txt');

for (let i = 0; i < 1000000; i++) {
  writeStream.write('Good luck!\n');
}

writeStream.end();

console.log('File created');