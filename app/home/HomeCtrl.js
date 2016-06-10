(function(){
	'use strict';
	angular.module('farmersMarket.home')
		.controller('homeCtrl', ['$scope', function($scope){
			$scope.title="farmersMarket";
			$scope.clickMe = function(){
				console.log($scope);
			}
		}]);
})();