(function(){
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('jingyujie', [
        "ui.router",'toaster',"ngAnimate","ngCookies","ngStorage","ngResource"
    ]).config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function($stateProvider,$locationProvider,$urlRouterProvider) {//路由定义
        $urlRouterProvider.otherwise('/artlist');
            $stateProvider
                .state('artlist', {
                    url: '/artlist',
                    templateUrl: 'views/artlist.html',
                    controller: 'artlistController'
                })
                .state('artinfo', {
                    params:{art:null},
                    url: '/artinfo',
                    templateUrl: 'views/artinfo.html',
                    controller: 'artinfoController'
                })
                .state('activitylist', {
                    url: '/activitylist',
                    templateUrl: 'views/activitylist.html',
                    controller: 'activitylistController'
                })
                .state('activityinfo', {
                    url: '/activityinfo',
                    templateUrl: 'views/activityinfo.html',
                    controller: 'activityinfoController'
                })
                .state('userindex', {
                    url: '/userindex',
                    templateUrl: 'views/userindex.html',
                    controller: 'userindexController'
                })
                .state('userorder', {
                    url: '/userorder',
                    templateUrl: 'views/userorder.html',
                    controller: 'userorderController'
                })
            ;
    }]).run(['$rootScope', '$log',"wechatService","$location","runmodal",
        function($rootScope, $log,wechatService,$location,runmodal){
            console.log("program is start!!");
            //启动
            wechatService.wechatConfig();
            if(runmodal=="dev"){//调试模式模拟身份
                wechatService.testUser();
            }else{
                var url=$location.$$absUrl;
                var pos=url.indexOf("code=");
                if(pos>0){
                    url=url.substring(pos+5);
                    console.log(url);
                    var nextPos=url.indexOf("&");
                    var code=url.substring(0,nextPos);
                    console.log(code);
                    console.log("system start! find code param.invoke code user method");
                    if(code&&code!=""){
                        wechatService.loadWechatUser(code);
                    }

                }

            }
        }]);


})();

