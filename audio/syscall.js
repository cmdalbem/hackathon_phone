var child = require('child_process');

child.execFile('mpg321', ['audio/bell.mp3'], function(err, stdout, stderr) {
	console.log(err);
	setTimeout(killProcess, 3000);
});

var killProcess = function() {
	child.exit();
}