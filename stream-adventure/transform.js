var input = process.stdin;
var fs = require('fs');
var through = require('through2');

var transform = through(function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}, function end(done) {
	done();
});

input.pipe(transform).pipe(process.stdout);