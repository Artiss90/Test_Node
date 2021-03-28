const os = require('os');

console.log(`Name host: ${os.hostname()}`);
console.log(`Type OS: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Version: ${os.release()}`);
console.log(`Time work: ${(os.uptime() / 60 / 60).toFixed(2)} hours`);
console.log(`Arch processor: ${os.arch()}`);
console.log(`Amount processor: ${os.cpus().length}`);
console.log(`Memory: ${(os.totalmem() / 1e9).toFixed(2)} Gb`);
console.log(`Free memory: ${(os.freemem() / 1e9).toFixed(2)} Gb`);
