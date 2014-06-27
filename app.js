var express = require('express'),
    routes = require('./server/route'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    settings = require('./server/settings'),
    flash = require('connect-flash'),
    messageList = [],
    MongoStore = require('connect-mongo')(express)
    port = 3000;

server.listen(port);
app.set('port', port);
app.use(express.static(__dirname + '/static'));
app.use(flash());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
    secret : settings.cookieSecret,
    key : settings.db,
    cookie : {maxAge:1000*60*60*24*30},
    store : new MongoStore({
        db:settings.db
    })
}))




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

routes(app);
// console.log('TechNode is on port ' + port + '!');