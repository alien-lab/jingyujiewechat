(function(){
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('jingyujie', [
        "ui.router",'toaster',"ngAnimate"
    ]).
    config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
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
    }]);
})();

