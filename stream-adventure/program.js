var file_name = process.argv[2];
var fs = require('fs');

fs.createReadStream(file_name).pipe(process.stdout);