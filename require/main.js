const { info, log } = require('./module');
const My = require('./moduleClass');

globalThis.a = 5;

info('name');
log('name');

const my = new My('My');

my.info('class');
my.log('class');
