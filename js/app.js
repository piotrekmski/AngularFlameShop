(function(){

var app = angular.module('store', ['store-directives']);

app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('products.json').success(function(data){
    store.products = data;
    });
    $http.post('products.json', {revievs:'value'}); 
  }]);

app.controller('ReviewController', function(){
	this.review = {};
	this.addReview = function(product){
		this.review.createdOn = Date.now();
		product.reviews.push(this.review);
		this.review = {};
	};
});
})();