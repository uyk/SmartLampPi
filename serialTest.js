var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', {
	baudrate : 9600,
	parser : SerialPort.parsers.readline('\n')
});

port.on('open', function() {
	console.log("Open");
	port.on('data',function(data) {
		console.log(data);
	});
});

port.on('error', function(err) {
	console.log('Error : ', err.message);
});
