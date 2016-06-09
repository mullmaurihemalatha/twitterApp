//creating the application module

angular.module('amazingSales',["amazingSales.login",
	"amazingSales.register",
	"amazingSales.cart",
	"amazingSales.home",
	"amazingSales.gadget",
	"amazingSales.common"]);


angular.module("amazingSales")
	.config(function() {
		console.log("i am the main module");
	});