(function(){
	'use strict';
	angular.module('amazingSales')
		.service("productSvc", [function(){
			this.getDiscount = function (item){
				var discount={
					percentage:0,
					decimals:1
				}
				if(item.price>10000){
					discount.percentage=10;
					discount.decimals=.1;
					return discount;
				}
				if(item.price>20000){
					discount.percentage=12;
					discount.decimals=.12;
					return discount;
				}
				else{
					return discount;
				}

			}

		}]);



})();