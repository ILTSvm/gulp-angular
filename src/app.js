var app = angular.module('app',['app-ctrl','ui.router']);

//路由
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("", "/main");
    $stateProvider
        .state('main',{
            url:'/main',
            templateUrl:'./views/main.html'
        })
        .state('main.info',{
            url:'/info',
            templateUrl:'./views/info.html'
        });
});