var phoneAudio = require('../audio/syscall.js');

var SerialPort = require("serialport").SerialPort;

// var serialPort = new SerialPort("/dev/ttyACM0", {
var serialPort;
var buffer = "";

try {
	serialPort = new SerialPort("/dev/cu.usbmodem1411", {
		baudrate: 9600
	});
} catch (e) {
	console.error("Couldn't open SerialPort");
}

if (serialPort) {
	serialPort.on("open", function () {
		console.log('open');

		serialPort.on('data', function(data) {
			// console.log(data);

			var size = data.length;

			for(var i=0; i<size; i++) {
				var character = String.fromCharCode(data[i]);
				if (character != ".") {
					buffer += character;	
				} else {
					// console.log('finished receiving: ' + buffer);

					if (buffer && buffer.length>0) {
						if (buffer=="P") {
							console.log('PICKED UP');
							// phoneAudio.playMp3('audio/bell.mp3');
						}
						else if (buffer=="I") {
							console.log("IDLE");
						} else  if (buffer[0]=="d") {
							console.log("RATING = ", buffer[1]);
						}
					}

					buffer = "";
				}
			}
			
		});

		// serialPort.write(new Buffer('4','ascii'), function(err, results) {
		// 	console.log('err ' + err);
		// 	console.log('results ' + results);
		// }); 
	});
}

module.exports = {
	playQuote : function(data) {
		serialPort.write(new Buffer(data,'ascii'), function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
		});	
	}
}