require('@babel/register');
require('@babel/polyfill');
var env = require('./env');
env();
require('./server.js');
