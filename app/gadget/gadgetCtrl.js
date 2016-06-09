(function(){
	'use strict';
	angular.module('amazingSales')
		.controller("gadgetCtrl",["$scope","gadgetSvc",function($scope,gadgetSvc){
			function init(){
				$scope.gadgets=gadgetSvc.getGadgetsDiscount();


				$scope.displayContent=function(item){
					item.more.flag=!item.more.flag;
					item.more.name=(item.more.flag) ? "less" : "more";
				};
				gadgetSvc.getGadgetsFromApi().then(function(response){
					console.log(response);

				}).catch(function (errorResponse){
					console.log(errorResponse);

				});
			}
			init();



		}]);







})();