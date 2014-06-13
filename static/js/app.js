var app = angular.module('myApp', []);

app.controller('indexCtrl', ['$scope', 'socket',
    function($scope, socket) {
        $scope.list = [];

        socket.on('connected', function() {
            console.log('connected');
            socket.emit('getAllMessage');

            socket.on('sent', function(data) {
                $scope.list.push(data);
            })

            socket.on('sendAllMessage', function(data) {
                $scope.list = data;
            })

            $scope.send = function() {
                var txt = $scope.txt;
                if (txt) {
                    socket.emit('send', {
                        content: txt
                    })
                } else {
                    return false;
                }
            }
        })






    }
])