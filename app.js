
/**
 * Module dependencies.
 */

var express = require('express'),
	port = process.env.PORT || 3000;


var app = express(),
	messageList = [];

app.use(express.static(__dirname + '/static'));

app.use(function (req, res) {
	res.sendfile('./static/index.html');
})

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket){
	socket.emit('connected');
})

io.sockets.on('send', function(message){
	messageList.push(message);
	socket.emit('sent', message);
})

io.sockets.on('getAllMessage', function(message){
	socket.emit('sendAllMessage', messageList);
})

console.log('TechNode is on port ' + port + '!');
