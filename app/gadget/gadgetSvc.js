(function(){
	'use strict';
	angular.module('amazingSales')
		.service("gadgetSvc", ["productSvc","$http",function(productSvc,$http){
			this.getGadgetsDiscount=function(){
				angular.forEach(gadgets, function(item){
					item.discount = productSvc.getDiscount(item);
				});
				console.log(gadgets);
				return gadgets;

			}
			this.getGadgetsFromApi = function(){
				return $http.get("api/product");
			}
			
			var gadgets = [
					{name:"Galaxy s7",
					specification:"Hybrid Dual sim,micro SD up to 200 GB",
					price:20000,
					imgurl:"app/img/image1.jpg",
					description:"motion panorama,selfie flash water & dust jrguirg gjb jf burg jfbjbj",
					more:{
						flag:false,
						name:"more"
					}
					},
					{name:"Galaxy s5",
					specification:"Hybrid Dual sim,micro SD up to 200 GB",
					price:10000,
					imgurl:"app/img/image2.jpg",
					description:"motion panorama,selfie flash water & dust jrguirg gjb jf burg jfbjbj",
					more:{
						flag:false,
						name:"more"
					}
					},
					{name:"Galaxy s4",
					specification:"Hybrid Dual sim,micro SD up to 200 GB",
					price:20000,
					imgurl:"app/img/image3.jpg",
					description:"motion panorama,selfie flash water & dust jrguirg gjb jf burg jfbjbj",
					more:{
						flag:false,
						name:"more"
					}
					},
					{name:"Galaxy s3",
					specification:"Hybrid Dual sim,micro SD up to 200 GB",
					price:10000,
					imgurl:"app/img/image4.jpg",
					description:"motion panorama,selfie flash water & dust jrguirg gjb jf burg jfbjbj",
					more:{
						flag:false,
						name:"more"
					}
					},
					{name:"Galaxy s2",
					specification:"Hybrid Dual sim,micro SD up to 200 GB",
					price:30000,
					imgurl:"app/img/image5.jpg",
					description:"motion panorama,selfie flash water & dust jrguirg gjb jf burg jfbjbj",
					more:{
						flag:false,
						name:"more"
					}
					},
					{name:"Galaxy s1",
					specification:"Hybrid Dual sim,micro SD up to 200 GB",
					price:40000,
					imgurl:"app/img/image6.jpg",
					description:"motion panorama,selfie flash water & dust jrguirg gjb jf burg jfbjbj",
					more:{
						flag:false,
						name:"more"
					}
					}
					];

		}])



})();

//service is used to cater the data to the application.
//service is used to talk to the backend API 
