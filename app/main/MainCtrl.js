(function(){
	'use strict';
	angular.module('amazingSales')
		.controller('MainCtrl', ["$scope", function($scope){
			function init(){
				$scope.navigationTemplate = "app/main/navbar.tpl.html";
				$scope.brandName = "eSales";
				$scope.tabs = [
					{display:"Home", name:"home",template:"app/home/home.tpl.html"},
					{display:"Apparels", name:"apparels",template:"app/sections/apparels.tpl.html"},
					{display:"Gadget", name:"gadget",template:"app/gadget/gadget.tpl.html"},
					{display:"Appliances", name:"appliances",template:"app/sections/appliance.tpl.html"},
					{display:"Jewellery", name:"jewellery",template:"app/sections/jewellery.tpl.html"}

				];
				$scope.loadLogin();


			}

			$scope.loadView=function(item){
				$scope.contentTemplate=item.template;
			}

			$scope.loadLogin=function(){
				$scope.contentTemplate="app/login/login.tpl.html";
			}
			init();
		}]);




})();