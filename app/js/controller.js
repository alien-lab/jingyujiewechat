/**
 * Created by 橘 on 2017/5/2.
 */
(function(){
    'use strict';
    var jingyujie=angular.module("jingyujie");
    jingyujie.controller("artlistController",["$scope","artService","$state",function($scope,artService,$state){
        $scope.title="艺术品列表";
        $scope.artlist=[];
        function loadArtList(){
            console.log("loaddata");
            artService.getArtList(function(data){
                $scope.artlist=data;
            });
        }
        loadArtList();
        $scope.loadArtList=loadArtList;
        $scope.artClick=function(art){
            $state.go("artinfo",{art:art});
        }
    }]);

    jingyujie.controller("artinfoController",["$scope","$state","$stateParams","toaster",function($scope,$state,$stateParams,toaster){
        $scope.title="艺术品明细";
        $scope.art=$stateParams.art;
        if($scope.art==null){
            toaster.pop('error', "错误提示", "参数传递错误");
        }
        console.log($stateParams,$scope)
        $scope.goList=function(){
            $state.go("artlist");
        }
    }]);

    jingyujie.controller("activitylistController",["$scope",function($scope){
        $scope.title="展览活动列表";
    }]);


})();

(function(){
    'use strict';
    var jingyujie=angular.module("jingyujie");
    jingyujie.controller("activityinfoController",["$scope",function($scope){
        $scope.title="展览活动详情";
    }]);

    jingyujie.controller("userindexController",["$scope",function($scope){
        $scope.title="用户主页";
    }]);

    jingyujie.controller("userorderController",["$scope",function($scope){
        $scope.title="用户订单";
    }]);
})();