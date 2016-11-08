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
            url:'/info/:obj',
            templateUrl:'./views/info.html'
        })
        .state('main.detail',{
            url:'/detail/:obj',
            templateUrl:'./views/detail.html'
        })
        .state('main.add',{
            url:'/add',
            templateUrl:'./views/add.html'
        });
});