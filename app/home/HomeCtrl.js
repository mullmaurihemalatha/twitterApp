(function(){
	'use strict';
	angular.module('amazingSales.home')
		.controller('HomeCtrl', ['$scope', function($scope){
			$scope.title="Dear customer";
			$scope.clickMe=function(){
				console.log($scope);
			}

		}])





})();