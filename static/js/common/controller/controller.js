// var app = angular.module('myApp');

app.controller('IndexCtrl', ['$scope', 'socket',
	function($scope, socket) {
		$scope.list = [];

		socket.on('connected', function() {
			// 获取所有聊天记录
			socket.emit('getAllMessage');
			// 获取所有聊天记录回调
			socket.on('gotAllMessage', function(data) {
				$scope.list = data.list;
			})
			// 发送信息
			$scope.send = function() {
				var txt = $scope.txt;
				if (txt) {
					socket.emit('sendMessage', {
						content: txt
					})
				} else {
					return false;
				}
			}
			// 发送信息回调
			socket.on('sentMessage', function (message) {
				$scope.list.push(message);
			})
		})




	}
])
.controller('PostCtrl', ['$scope', 'socket', function($scope, socket){
	$scope.title = '发表';
	
}])