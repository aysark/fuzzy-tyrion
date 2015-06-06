var module = require('./module.js');

module(process.argv[2], process.argv[3], function(err, data) {
	if(err) console.error(err);
	for(var i=0; i<data.length; i++) {
		console.log(data[i]);
	}
});