app.controller('addgood-ctrl',function($scope,$state, $stateParams){
    // $scope.myUrl = $location.absUrl();
    $scope.addGood = function(){
        var infoStr = JSON.stringify($scope.goodinfo);
        $state.go('main.info',{obj:infoStr});
    };
});