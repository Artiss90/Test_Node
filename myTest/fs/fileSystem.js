// ? for callback
// const fs = require('fs');

// fs.readFile('./file.txt', (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// ? for promise
const fs = require('fs/promises');

const readFile = async () => {
  const text = (await fs.readFile(`${__dirname}/file.txt`)).toString();
  console.log(text);
};
const addFile = async () => {
  await fs.appendFile(`${__dirname}/file.txt`, '\nТак було, так буде');
};
const replaceFile = async () => {
  await fs.writeFile(`${__dirname}/file.txt`, 'Hello');
};

replaceFile();
addFile();
readFile();

// fs.readFile(`${__dirname}/file.txt`)
//   .then(data => console.log(data.toString()))
//   .catch(error => console.log(error.message));

// fs.readdir(__dirname).then(files => {
//   return Promise.all(
//     files.map(async filename => {
//       const stats = await fs.stat(filename);
//       return {
//         Name: filename,
//         Size: stats.size,
//         Date: stats.mtime,
//       };
//     }),
//   );
// });
