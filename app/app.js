//creating the application module

angular.module("farmersMarket",["farmersMarket.register",
	"farmersMarket.login",
	"farmersMarket.home",
	"farmersMarket.cart"
	]);


angular.module("farmersMarket")
	.config(function() {
		console.log("i am the main module");
	});