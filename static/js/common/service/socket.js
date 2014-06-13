

app.factory('socket', function($rootScope){
	var socket = io('http://localhost:3000');

	return {
		on : function(name, callback){
			socket.on(name, function(){
				var a = arguments;
				$rootScope.$apply(function(){
					if(callback){
						callback.apply(socket, a);
					}
				})
			})
		},
		emit : function(name, data, callback){
			socket.emit(name, data, function(){
				var a = arguments;
				$rootScope.$apply(function(){
					if(callback){
						callback.apply(socket, a);
					}
				})
			})
		}
	}
})