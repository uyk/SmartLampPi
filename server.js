var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var request = require('request');

var app = express();
var port = 5000;


var GPIO = require('onoff').Gpio,
	led = new GPIO(18,defaultLED);

var defaulLED = 0;
var timeout_ms = 2000;	//2초
var timeout = setTimeout(function() {
	console.log("타임아웃");
	led.writeSync(defaultLED);
}, timeout_ms);


app.use(bodyParser.urlencoded( {extended : false } ));

app.get('/', function(req,res) {
	console.log('smart void lamp');
	res.send('Smart Voice Lamp');
});
app.post('/facebook', function(req,res) {
	console.log('facebook post');
	var from = req.body.postfrom;
	var myMessage = req.body.postmyMessage;
	var updateAt = req.body.postupdateAt;
	
	console.log('from : ', from );
	console.log('myMessage : ', myMessage);
	console.log('update at : ', updateAt);

	led.writeSync(1);
	timeout;
	res.send('Sucess from /facebook pi');
});
http.createServer(app).listen(port,function() {
	console.log("createServer");
});
