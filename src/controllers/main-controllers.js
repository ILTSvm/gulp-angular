app.controller('main-ctrl',function($scope,$rootScope){
    $scope.title = '后台管理系统';
    $scope.logo = '';
    $scope.username = 'Heav3n';
    $scope.navlist = [
        {
            name:'首页',
            src:'/main',
            child:[]
        },{
            name:'账户管理',
            to:'mine-nav',
            child:[
                {
                    name: '账户信息',
                    src:'.userinfo'
                },{
                    name:'密码修改',
                    src:''
                }
            ]
        },{
            name:'商品管理',
            to:'good-nav',
            child:[
                {
                    name:'商品信息', 
                    src:'.info'
                },{
                    name:'增加商品',
                    src:'.add'
                }
            ]
        },{
            name:'订单管理',
            to:'order-nav',
            child:[
                {
                    name:'订单列表',
                    src:''
                },{
                    name:'添加订单',
                    src:''
                },{
                    name:'删除订单',
                    src:''
                }
            ]
        },{
            name:'会员管理',
            to:'user-nav',
            child:[
                {
                    name:'会员首页',
                    src:''
                },{
                    name:'会员查询',
                    src:''  
                },{
                    name:'违规会员处理',
                    src:''
                }
            ]
        }
    ];
    $scope.change = function(){
        $rootScope.test=$scope.test;
        console.log($rootScope.test);
    };
});