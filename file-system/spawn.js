var spawn = require("child_process").spawn;


process.argv.shift();
process.argv.shift();
var proc = process.argv.shift();

console.log(proc);
console.log(process.argv);

spawn(proc, process.argv);
