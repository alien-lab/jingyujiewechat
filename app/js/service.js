/**
 * Created by 橘 on 2017/5/2.
 */
(function(){
    'use strict';
    var jingyujie=angular.module("jingyujie");
    jingyujie.service("artService",["$http","serverDomain",function($http,serverDomain){
        this.getArtList=function(callback){
            $http({
                url:serverDomain+'/artwork/getAll',
                method:"GET"
            }).then(function(data){
                console.log(data);
                if(callback){
                    callback(data,true);
                }
            },function(error){
                console.log(error);
                if(callback){
                    callback(error,false);
                }
            });

        }
    }]);
})();