shoppingCartApp.controller('mainController', ['$scope', 'shoppingService', function($scope, shoppingService) {

  $scope.teas = []
  $scope.getTeas = function() {
    shoppingService.getTeas().then(function(teas) {
      $scope.teas = teas;
    })
  }
  $scope.getTeas();
  $scope.shoppingBag = shoppingService.getShoppingBag();
  $scope.quantity = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  $scope.addToBag = function(tea) {
    shoppingService.addToBag(tea);
  }

  // $scope.getCategories = function (teas) {
  //   shoppingService.getCategories(teas);
  //   console.log(getCategories);
  // }

}])

shoppingCartApp.controller('bagController', ['$scope', 'shoppingService', function($scope, shoppingService) {

  $scope.shoppingBag = shoppingService.getShoppingBag();
  $scope.orderTotal = shoppingService.getOrderTotal();

  $scope.removeFromBag = function(item) {
    shoppingService.removeFromBag(item);
    $scope.orderTotal = shoppingService.getOrderTotal();
  };

  $scope.updateSubtotal = function(item) {
    shoppingService.updateSubtotal(item);
    $scope.orderTotal = shoppingService.getOrderTotal();
  }

}])
