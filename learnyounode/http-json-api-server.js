var port = process.argv[2];
var http = require('http');
var url = require('url');

var routes = {
	"/api/parsetime" : function(parsed_url) {
		var date = new Date(parsed_url.query.iso);
		return JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), 
				second: date.getSeconds()});
	},
	"/api/unixtime" : function(parsed_url) {
		var date = new Date(parsed_url.query.iso);
		return JSON.stringify({ unixtime: date.getTime() });
	}
};

var server = http.createServer(function(req, resp) {
	if (req.method == 'GET') {
		var parsed_url = url.parse(req.url, true);
		var ret = routes[parsed_url.pathname];

		if (ret) {
			resp.writeHead(200, {'Content-Type': 'application/json'});
			resp.end(ret(parsed_url));
		}else {
			resp.writeHead(404);
			resp.end();
		}
	}
});

server.listen(port);