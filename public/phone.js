var phoneAudio = require('../audio/syscall.js');

var repo = require('./repository.js');

var SerialPort = require("serialport").SerialPort;

// var serialPort = new SerialPort("/dev/ttyACM0", {
var serialPort;
var buffer = "";
var quoteId = -1;


try {
	serialPort = new SerialPort("/dev/ttyACM0", {
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

			// var quote = repo.getRandomQuote();
			// console.log(quote.text)
			// phoneAudio.playMp3('audio/'+quote.audioPath);

			for(var i=0; i<size; i++) {
				var character = String.fromCharCode(data[i]);
				if (character != ".") {
					buffer += character;	
				} else {
					// console.log('finished receiving: ' + buffer);

					if (buffer && buffer.length>0) {
						if (buffer=="P") {
							console.log('PICKED UP');
							var quote;
							console.log("QuoteId = "+quoteId);		
							if(quoteId >= 0) {
								quote = repo.getQuote(quoteId);
							}
							else {
								quote = repo.getRandomQuote();
							}
												
							console.log(quote.text);
							phoneAudio.playMp3('audio/'+quote.audioPath);
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

		
	});
}

module.exports = {
	playQuote : function(data) {
		serialPort.write(new Buffer(data,'ascii'), function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
		});	
	},
	ring : function(quote) {
		console.log("writing RING to arduino : "+quote);

		quoteId = quote;
		serialPort.write(
			new Buffer("RING",'ascii'),
			function(err, results) {
				console.log('err ' + err);
				console.log('results ' + results);
			}
		);	
	}
}