var fs = require('fs'),
	lame = require('lame');

var Speaker = require('speaker');


module.exports = {

	play : function(soundfile) {
	fs.createReadStream("bell.mp3")
	  .pipe(new lame.Decoder())
	  .on('format', function (format) {
	    this.pipe(new Speaker(format));
	  }).end();
	}
}

