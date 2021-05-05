/*const path = require('path');
const cmd = require(path.join(__dirname, 'command' + '.js'));*/

const cmd = require( './command.js')
const config = require('./smzconfig')
//cmd.apply(cmd,["bbbb","cccc"])
//cmd.usage()
console.log(config.dev.age)
