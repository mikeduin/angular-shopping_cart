var shoppingCartApp = angular.module('shoppingCartApp', ['ngRoute'])

shoppingCartApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/productIndex.html',
      controller: 'mainController'
    })
    .when('/checkout', {
      templateUrl: 'partials/shoppingBag.html',
      controller: 'bagController'
    }
    )
})

shoppingCartApp.filter('currencyAdj', function () {
  return function (price) {
    return '$' + (price / 100).toFixed(2);
  }
})
