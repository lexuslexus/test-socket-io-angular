/**
 * Module dependencies.
 */

var express = require('express'),
	app = express(),
    port = process.env.PORT || 3000,
    server = require('http').Server(app),
    messageList = [];


server.listen(port);
app.use(express.static(__dirname + '/static'));

app.use(function(req, res) {
    res.sendfile('./static/index.html');
})

var io = require('socket.io')(server);

io.sockets.on('connection', function(socket) {
	console.log('connected');
    socket.emit('connected');

    socket.on('getAllMessage', function() {
        console.log('emit getAllMessage')
        socket.emit('sendAllMessage', messageList);
    })


    socket.on('send', function(message) {
        messageList.push(message);
        socket.emit('sent', message);
    })

})



console.log('TechNode is on port ' + port + '!');