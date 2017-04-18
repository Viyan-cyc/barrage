var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
	res.send('<h1>Welcome Realtime Server</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('danmaku send', function(msg){
        console.log('message: ' + msg);
        io.emit('danmaku show', msg);
    });
});

server.listen(3002, function () {
    console.log('监听端口:3002');
});
