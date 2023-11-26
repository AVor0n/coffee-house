import fs from 'fs';
import sharp from 'sharp';

const minifyFile = filename =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, (err, sourceData) => {
      if (err) throw err;
      sharp(sourceData).toFile(filename, (error, info) => (error ? reject(error) : resolve(info)));
    });
  });

Promise.resolve(process.argv)
  .then(x => x.slice(2))
  .then(x => x.map(minifyFile))
  .then(x => Promise.all(x))
  .catch(() => {
    process.exit(1);
  });
