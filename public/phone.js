/**
var Q = require("q");

var SerialPort = require("serialport").SerialPort;

var serialPort = new SerialPort("/dev/ttyACM0", {
	baudrate: 9600
});
var getSerialResponse = function(data) {
	
}

serialPort.on("open", function () {
	console.log('open');

	serialPort.on('data', function(data) {
		console.log('data received: ' + data);
		getSerialResponse(data);
	});

	serialPort.write(new Buffer('4','ascii'), function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
	});
});

module.exports = {
	ring : function(data) {
		serialPort.write(new Buffer(data,'ascii'), function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
		});	
	}
}

var waitForInput = function(data) {
  	var deferred = Q.defer();
   	// wait for 10s before giving up
   	setTimeout(function () {
        deferred.resolve(false);
    }, 10000);
	
    return deferred.promise;
}


var getResultOrFail = function() {
	Q.any(["waitForInput", "getSerialResponse"])
	.then(function (first) {
	    // Any of the promises was fulfilled.

	}, function (error) {
	    // All of the promises were rejected.
	});
}
*/