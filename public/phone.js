var SerialPort = require("serialport").SerialPort;

// var serialPort = new SerialPort("/dev/ttyACM0", {
var serialPort = new SerialPort("/dev/cu.usbmodem1421", {
	baudrate: 9600
});


serialPort.on("open", function () {
	console.log('open');

	serialPort.on('data', function(data) {
		console.log('data received: ' + data);

		if (data && data.length>0) {
			if (data=="P") {
				console.log('PICKED UP');
			}
			else {
				console.log("RATING = ", data);
			}
		}
		
	});

	// serialPort.write(new Buffer('4','ascii'), function(err, results) {
	// 	console.log('err ' + err);
	// 	console.log('results ' + results);
	// }); 
});

module.exports = {
	playQuote : function(data) {
		serialPort.write(new Buffer(data,'ascii'), function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
		});	
	}
}