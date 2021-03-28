const EventEmitter = require('events');
const fs = require('fs');

class MyEmitter extends EventEmitter {}

const me = new MyEmitter();

me.on('read', (err, data) => {
  const result = data.toUpperCase();
  me.emit('write', err, result);
});

me.on('write', data => {
  fs.writeFile('newPath.js', data, err => {
    console.log('Write');
  });
});

fs.readFile('../internal/path.js', 'utf-8', (err, data) => {
  me.emit('read', err, data);
});
