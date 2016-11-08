app.controller('info-ctrl',function($scope,$http,$rootScope,$state,$stateParams){
    console.log($stateParams);
    $scope.info = ['商品id','商品预览','商品名称','商品种类','商品价格','操作'];
    $scope.infomation = [];
    $scope.count = Math.ceil(Math.random()*500); 
    $scope.test = $rootScope.test;
    if($scope.test&&$scope.test.length<=10){
        $(".info-pagelist").hide();
    }
    // $scope.add = function(instance){
    //     $scope.name = instance.name;
    // }
    // $http.get('http://10.9.163.104/goods/getData?pageindex=1&pagesize=10')
    $http.get('../mock/data.json')
    .success(function(response){
        if($stateParams.obj!=""){
            var changeInfo = JSON.parse($stateParams.obj);
        }else{
            var changeInfo ="";
        }
        var goodinfo = [];
        var count = 0;
        for(var i = 0;i<1000;i++){
            //控制数量
            if(response[i].name==changeInfo.name){
                response[i]=changeInfo; 
            }else if(changeInfo.name&&changeInfo.name!=""){
                count++;
            }
            goodinfo[i] = response[i];
        }
        $scope.infomation = goodinfo;
        if(count==1000){
            $scope.infomation.unshift(changeInfo);
        }
        $scope.pageSize = 10;
        $scope.pages = Math.ceil($scope.infomation.length/$scope.pageSize);
        $scope.newPages = $scope.pages >5?5:$scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        $scope.setData = function(){
            console.log(1);
            $scope.items = $scope.infomation.slice(($scope.pageSize*($scope.selPage-1)),($scope.selPage * $scope.pageSize));
        };
        $scope.items = $scope.infomation.slice(0,$scope.pageSize);
        //分页要repeat的数组
        for(var j = 0;j<$scope.newPages;j++){
            $scope.pageList.push(j+1);
        }
        //打印当前选中页搜索
        $scope.selectPage = function(page){
            if(page<1||page>$scope.pages) return;
            //最多显示分页数5
            if(page>2){
                //因为只显示5个页数，大于2页开始分页转换
                var newpageList = [];
                for(var i = (page-3);i<((page+2)>$scope.pages?$scope.pages:(page+2));i++){
                    newpageList.push(i+1);
                }
                $scope.pageList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);
            console.log("当前页"+page);
        };
        $scope.isActivePage = function (page) {
         return $scope.selPage == page;
        };
        $scope.Previous = function(){
            $scope.selectPage($scope.selPage-1);
        };
        $scope.Next = function(){
            console.log($scope.items);
            $scope.selectPage($scope.selPage+1);
        };
        $scope.toDetail = function(obj){
            console.log(obj);
            var objStr = JSON.stringify(obj);
            $state.go('main.detail',{obj:objStr}); 
        };
        $scope.goodDelete = function($index){
            $scope.infomation.splice($index,1);
            $scope.items.splice($index,1);
            console.log($scope.infomation[$index]);
        };
    });
}); 