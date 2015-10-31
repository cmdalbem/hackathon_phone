var Gpio = require('onoff').Gpio,
	arduino_4 = new Gpio(4, 'in', 'both'),
	arduino_14 = new Gpio(14, 'out'),
	arduino_16 = new Gpio(16, 'out');

var piblaster = require('pi-blaster.js');

module.exports = {
	ring : function() {
		arduino_14.writeSync(1);
		arduino_16.writeSync(1);

		arduino_14.write(1);
		arduino_16.write(1);


		piblaster.setPwm(0, 1); // 100% brightness
		piblaster.setPwm(4, 1); // 100% brightness
		
		arduino_4.watch(function(err, value) {
		  console.log("input value is = "+value);
		});

	}
}