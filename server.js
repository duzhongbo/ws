var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection',function (socket) {

	console.log('a user connected');

	socket.on('disconnect',function () {
		console.log('a user disconnect');
	})

	//监听用户发布聊天内容
	socket.on('message', function(obj){
		console.log('服务端监听：',obj,obj.content);
		//向所有客户端广播发布的消息
		io.emit('message', obj);
		
	});


})


http.listen(3000, function(){
	console.log('listening on *:3000');
});