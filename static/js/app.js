var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl : 'js/modules/index/index.tpl.html',
        controller : 'js/modules/index/indexCtrl.js'
    })
    .when('/post', {
        templateUrl : 'js/modules/post/post.tpl.html',
        controller : 'js/modules/post/postCtrl.js'
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
})