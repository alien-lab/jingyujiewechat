/**
 * Created by 橘 on 2017/5/2.
 */
(function(){
    'use strict';
    var jingyujie=angular.module("jingyujie");
    jingyujie.controller("artlistController",["$scope","artService","$state","toaster","rootpath",function($scope,artService,$state,toaster,rootpath){
        $scope.title="艺术品列表";
        $scope.artlist=[];
        $scope.rootpath=rootpath;
        $scope.$watch("$root.openid",function(newvalue,oldvalue){
            console.log("openid changed:",newvalue);
            if(newvalue&&newvalue!=""){
                toaster.pop("info","操作提示","获取到openid:"+newvalue);
            }
        },true);

        function loadArtList(){
            console.log("loaddata");
            artService.getArtList(function(data,flag){
                if(!flag){
                    toaster.pop('error', "错误提示", data.data.error);
                }
                $scope.artlist=data.data;
            });
        }
        loadArtList();
        $scope.loadArtList=loadArtList;
        $scope.artClick=function(art){
            $state.go("artinfo",{art:art});
        }
    }]);

    jingyujie.controller("artinfoController",["$scope","$state","$stateParams","toaster","rootpath",function($scope,$state,$stateParams,toaster,rootpath){
        $scope.title="艺术品明细";
        $scope.rootpath=rootpath;
        $scope.art=$stateParams.art;
        if($scope.art==null){
            toaster.pop('error', "错误提示", "参数传递错误");
        }
        console.log($stateParams,$scope)
        $scope.goList=function(){
            $state.go("artlist");
        }
        $scope.cameraTest=function(){
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                }
            });
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