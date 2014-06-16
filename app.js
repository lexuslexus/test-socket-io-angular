/**
 * Module dependencies.
 */

// var express = require('express'),
// 	port = process.env.PORT || 3000;


// var app = express(),
// 	messageList = [];

// app.use(express.static(__dirname + '/static'));

// app.use(function(req, res) {
// 	res.sendfile('./static/index.html');
// })

// var io = require('socket.io').listen(app.listen(port));

// io.sockets.on('connection', function(socket) {
// 	socket.emit('connected');

// 	io.sockets.on('send', function(message) {
// 		messageList.push(message);
// 		socket.emit('sent', message);
// 	})

// 	io.sockets.on('getAllMessage', function(message) {
// 		console.log('getAllMessage');
// 		socket.emit('sendAllMessage', messageList);
// 	})
// })


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messageList = [];

server.listen(3000);

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	var dir = __dirname + '/static/index.html';
	console.log(dir)
	res.sendfile(dir);
});

io.on('connection', function(socket) {
	socket.emit('connected');
	// 发送所有聊天记录
	socket.on('getAllMessage', function() {
		console.log('getAllMessage');
		socket.emit('gotAllMessage', {list : messageList});

	});
	// 接收聊天信息
	socket.on('sendMessage', function (message) {
		messageList.push(message);
		console.log('get message: ' + message.content);
		io.emit('sentMessage', message);
	})
});


// console.log('TechNode is on port ' + port + '!');