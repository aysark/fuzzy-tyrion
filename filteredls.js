var fs = require('fs');
var p = require('path');
fs.readdir(process.argv[2], function(err, list) {
	if (err) console.error(err);
	for(var i=0; i<list.length; i++) {
		var e = p.extname(list[i]).substr(1);
		if (e === process.argv[3])
			console.log(list[i]);
	}
});