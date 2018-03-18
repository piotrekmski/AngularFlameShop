(function(){
var app = angular.module('store-directives',[]);

app.directive('productTitle', function(){
	return {
		restrict: 'E',
		templateUrl: './includes/product-title.html'
	};
});

app.directive('productDescription', function(){
	return {
		restrict: 'E',
		templateUrl: './includes/product-description.html'
	};
});

app.directive('productSpecifications', function(){
	return {
		restrict: 'A',
		templateUrl: './includes/product-specifications.html'
	};
});

app.directive('productReviews', function(){
	return {
		restrict: 'E',
		templateUrl: './includes/product-reviews.html'
	};
});

app.directive('productGallery', function(){
	return {
		restrict: 'E',
		templateUrl: './includes/product-gallery.html',
		controller: function(){
    				this.current = 1;
 					this.setImage = function(image){	
    					if(image == "images/bigbang-01-full.png") this.current = 0;
    					if(image == "images/bigbang-02-full.png") this.current = 1;
    					if(image == "images/bigbang-03-full.png") this.current = 2;

    					if(image == "images/stupid-01-full.png") this.current = 0;
    					if(image == "images/stupid-02-full.png") this.current = 1;
    					if(image == "images/stupid-03-full.png") this.current = 2;	
    					};    				
  					},
  		controllerAs: 'gallery'
	};
});

app.directive("productTabs", function(){
	return {
		restrict: 'E',
		templateUrl: "./includes/product-tabs.html",
		controller: function(){
					this.tab = 1;
					this.selectTab = function(setTab){
						this.tab = setTab;
						};
					this.isSelected = function(checkTab){
						return this.tab === checkTab;
						};
					},
		controllerAs: 'tab'
	};
});

})();


