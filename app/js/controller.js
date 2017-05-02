/**
 * Created by 橘 on 2017/5/2.
 */
(function(){
    'use strict';
    var jingyujie=angular.module("jingyujie");
    jingyujie.controller("artlistController",["$scope","artService",function($scope,artService){
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
    }]);

    jingyujie.controller("artinfoController",["$scope",function($scope){
        $scope.title="艺术品明细";
        $scope.art={
            id:1,
            name:"春色之美",
            author:"金成哲",
            date:"2017-04-05",
            price:"20000",
            pic:"../image/default.jpg",
            desc:"材料：布面油画,尺寸：40X50cm,年代：2015年,签名：金成哲（韩文）,品相：完好",
            details:[]
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