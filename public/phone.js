var Gpio = require('onoff').Gpio,
	arduino = new Gpio(14, 'out');


module.exports = {
	ring : function() {
		arduino.write('high');
	}
}