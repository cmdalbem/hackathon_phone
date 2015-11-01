var child = require('child_process');

module.exports = {
	playMp3 : function(filename) { 
		child.exec('mpg321 '+filename, function(err, stdout, stderr) {
		console.log(err);	
		});
	},
	playWav : function(filename) { 
		child.exec('aplay '+filename, function(err, stdout, stderr) {
		console.log(err);	
		});
	} 
}
