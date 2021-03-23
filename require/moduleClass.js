class My {
  constructor(name) {
    this.name = name;
  }
  info = msg => {
    console.log(`info: ${msg}`);
  };

  log = msg => {
    console.log(`log: ${msg}: ${this.name}`);
  };
}

module.exports = My;
