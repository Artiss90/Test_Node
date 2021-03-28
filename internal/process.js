//*не нуждается в подключении, так модуль глобален
// const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.platform);
console.log(process.arch);
console.log(process.title);
console.log(process.pid);
console.log(process.cwd());
console.table(process.argv.slice(2));

process.on('exit', code => {
  console.log(`About to exit with code: ${code}`);
});
process.exit(1);
