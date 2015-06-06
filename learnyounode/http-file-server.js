var port = process.argv[2];
var filePath = process.argv[3];
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
	fs.createReadStream(filePath).pipe(resp);
});
server.listen(port);