var through = require('through2');
var split = require('split');
var input = process.stdin;

var x = 0;
var transform = through(function write(line, _, next) {
	if (x == 0) {
		this.push(line.toString().toLowerCase() + '\n');
	} else {
		this.push(line.toString().toUpperCase() + '\n');
	}
	x ^= 1
	next();
});

input.pipe(split()).pipe(transform).pipe(process.stdout);
