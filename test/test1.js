/*
console.log("all arg is ",process.argv)
console.log(process.version)
var str ='16.3.0-alpha.1'
var versionNoPrerelease = str.replace(/-.*$/, '')
console.log(versionNoPrerelease)
*/


/*
const semver = require('semver')
var bolean = semver.satisfies('9.3.1','<6.2.0 || 9 <9.3.0')
console.log(bolean)
*/

/*
console.log(process.argv[1][process.argv[1].length - 1] )
if (process.argv[1][process.argv[1].length - 1] === 'g') {
  process.argv.splice(1, 1, 'npm', '-g')
}
*/


/*
process.argv.splice(1, 1, 'npm', '-g')
//process.argv.shift()
console.log(process.argv)
*/

/*
if (2 > 3) console.log(4)
else console.log(5)
*/
/*
name = "Doe, John";
var name =name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1")
console.log(name)
*/

/*
var str = process.argv.splice(2)
console.log(str)
*/


/*
const neconf = require('./command')

console.log(1, ...[2, 3, 4], 5)
*/

