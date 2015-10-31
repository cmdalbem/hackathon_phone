var child = require('child_process');

module.exports = {
	play : function(filename) { 
		child.exec('mpg321 '+filename, function(err, stdout, stderr) {
		console.log(err);	
		});
	} 
}
