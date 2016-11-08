app.controller('detail-ctrl',function($scope,$state, $stateParams){
    // $scope.myUrl = $location.absUrl();
    $scope.goodinfo = JSON.parse($stateParams.obj);
    $scope.toInfo = function(){
        var infoStr = JSON.stringify($scope.goodinfo);
        $state.go('main.info',{obj:infoStr});
    };
});