const info = msg => {
  console.log(`info: ${msg}`);
};

const log = msg => {
  console.log(a);
  console.log(`log: ${msg}`);
};

// module.exports = { info, log };

// ? либо верхний способ импорта, либо нижний

exports.info = info;
exports.log = log;

