module.exports = function(dirname, ext, callback) {
	var fs = require('fs');
	var p = require('path');
	fs.readdir(dirname, function(err, list) {
		if (err) return callback(err);
		list = list.filter(function(file){
			return p.extname(file).substr(1) == ext;
		})
		return callback(null, list);
	});	
}