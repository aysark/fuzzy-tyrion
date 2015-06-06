var http = require('http');
var bl = require('bl');
var all_data = [0,0,0];

http.get(process.argv[2], function(res) {
	res.setEncoding('utf-8');
	res.on('error', console.error);
	res.pipe(bl(function(err, data){
		if(err) return console.error(err);
		all_data[0] = data.toString();
	}));
});

http.get(process.argv[3], function(res) {
	res.setEncoding('utf-8');
	res.on('error', console.error);
	res.pipe(bl(function(err, data) {
		if(err) return console.error(err);
		all_data[1] = data.toString();
	}));
})

http.get(process.argv[4], function(res) {
	res.setEncoding('utf-8');
	res.on('error', console.error);
	res.pipe(bl(function(err, data) {
		if(err) return console.error(err);
		all_data[2] = data.toString();
	}))
})

var is_correct = function(e) {
	console.log(e);
	return e != 0;
};


while(!all_data.every(is_correct)) {
	
}
all_data.every(function(e) {
	console.log(e);
})
