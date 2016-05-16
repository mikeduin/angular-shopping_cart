var shoppingCartApp = angular.module('shoppingCartApp', ['ngRoute'])

shoppingCartApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/productIndex.html',
      controller: 'mainController'
    })
})

// shoppingCartApp.filter('currencyAdj', function () {
//   return function (price) {
//     var adj = '$' + price.slice(0, 2) + '.' + price.slice(-2);
//     return adj;
//   }
// })
