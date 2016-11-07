var app = angular.module('app',['app-ctrl','ui.router']);


//搜索框传值
app.controller('main-ctrl',function($scope,instance){
    $scope.change = function(){
        instance.name = $scope.test;
    };
});
app.controller('info-ctrl',function($scope,instance){
    $scope.add = function(){
        $scope.name = instance.name;
    }
})
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