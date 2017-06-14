(function(){

    'use strict';


    var app = angular.module("jugnoo", ['angular-loading-bar']);

    app.config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider){

        // cfpLoadingBarProvider.includeBar = false;
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.parentSelector = '#loading_bar';
        cfpLoadingBarProvider.spinnerTemplate = '<div class="loading_bar_container"><span style="text-align: center; margin-left: 150px; margin-top: 20px;    text-align: center;margin-left: 176px;margin-top: 45px;padding: 10px;font-size: 10px;">LOADING</span><div style="margin-left: 80px;" class="loader8"></div></div>';
        cfpLoadingBarProvider.includeBackdrop = true
    }
    ]);

    app.factory('dataFactory',function($http,$rootScope,$log,$q){
        return{
            returnTags:function(text){
                var deferred = $q.defer();

                $http.post('/getArticleTags', {'text' :text})
                    .then(function(data) {
                        deferred.resolve(data);
                    }).catch(function(){
                    deferred.reject();
                });

                return deferred.promise;
            }
        }
    });


    app.controller("myCtrl",['$scope','dataFactory',function($scope,dataFactory){
        $scope.hola = "w ";
    }]);


})();



