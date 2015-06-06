var port = process.argv[2];
var filePath = process.argv[3];
var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var server = http.createServer(function(req, resp) {
	if (req.method == 'POST') {
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(resp);
	}
});
server.listen(port);