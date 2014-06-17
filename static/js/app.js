var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    // $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl : 'js/modules/index/index.tpl.html',
        controller : 'IndexCtrl'
    })
    .when('/post', {
        templateUrl : 'js/modules/post/post.tpl.html',
        controllerUrl : 'js/modules/post/postCtrl.js',
        controller : 'PostCtrl'
    })
    .when('/login', {
        templateUrl : 'js/modules/login/login.tpl.html',
        controller : 'js/modules/login/loginCtrl.js'
    })
    .when('/registry', {
        templateUrl : 'js/modules/registry/registry.tpl.html',
        controller : 'js/modules/registry/registryCtrl.js'
    })
    .otherwise('/404', {
        templateUrl : 'js/modules/404/404.tpl.html',
        controller : 'js/modules/404/404Ctrl.js'
    })
}])