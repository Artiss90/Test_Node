const fs = require('fs');
// const path = require('path');

fs.unlink('temp/path.js', err => {
  if (err) {
    console.log(err.message);
    return;
  }
  fs.rmdir('temp', err => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('Delete done');
  });
});
