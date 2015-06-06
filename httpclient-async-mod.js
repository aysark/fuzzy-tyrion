var http = require('http');
var bl = require('bl');
var async = require('async');

var all_data = [];
var count = 0;

var q = async.priorityQueue(function(task, cb){
	task.exec;
	cb();
}, 3);

q.push({name:'p1', exec: http.get(process.argv[2], function(res) {
	res.setEncoding('utf-8');
	res.on('error', console.error);
	res.pipe(bl(function(err, data){
		if(err) return console.error(err);
		all_data[0] = data.toString();
		count++;
		print();
	}));
})}, 1, function() {
});

q.push({name:'p2', exec: http.get(process.argv[3], function(res) {
	res.setEncoding('utf-8');
	res.on('error', console.error);
	res.pipe(bl(function(err, data) {
		if(err) return console.error(err);
		all_data[1] = data.toString();
		count++;
		print();
	}));
})}, 2, function() {
});

q.push({name:'p3', exec: http.get(process.argv[4], function(res) {
	res.setEncoding('utf-8');
	res.on('error', console.error);
	res.pipe(bl(function(err, data) {
		if(err) return console.error(err);
		all_data[2] = data.toString();
		count++;
		print();
	}))})}, 3, function() {
});

function print() {
	if (count ===3 ) {
		for(var i=0; i<all_data.length; i++) {
			console.log(all_data[i]);
		}
	}
}

// q.drain = function() {
// 	var correct = function(e) {
// 		return e === 0;
// 	};
// 	while (all_data.every(correct)) {
// 	}
// }

