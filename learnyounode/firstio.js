var fs = require('fs');
fs.readFile(process.argv[2], function(error, buffer) {
	if(error) return console.error(error);
	console.log(buffer.toString().split("\n").length-1);
});
