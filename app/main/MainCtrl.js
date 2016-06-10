(function(){
	'use strict';

angular.module('farmersMarket')
	.controller('mainCtrl', ["$scope", function($scope){
		function init(){
			$scope.navigationTemplate="app/main/navbar.tpl.html";
		}
		init();
	}]);
		
})();
