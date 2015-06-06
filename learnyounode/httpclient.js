var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf-8');
	res.pipe(bl(function(err, data){
		if (err) return console.error(err);
		console.log(data.length);
		console.log(data.toString());
	}));
	res.on("error", console.error);
});