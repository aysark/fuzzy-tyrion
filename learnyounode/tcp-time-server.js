var net = require('net');
var port = process.argv[2];
var server = net.createServer(function(socket){
	var d = new Date();
	var str = d.getFullYear()+"-"
	+("0"+(d.getMonth()+1)).slice(-2)
	+"-"
	+("0"+d.getDate()).slice(-2)
	+" "+d.getHours()
	+":"+d.getMinutes()+"\n";
	socket.end(str)
})

server.listen(port);