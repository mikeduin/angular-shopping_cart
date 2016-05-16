shoppingCartApp.controller('mainController', ['$scope', 'shoppingService', function($scope, shoppingService) {

  $scope.teas = shoppingService.getTeas()
  $scope.shoppingBag = shoppingService.getShoppingBag();
  console.log($scope.shoppingBag)
  // console.log($scope.teas);
  $scope.teas.quantity = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  $scope.addToBag = function(tea) {
    shoppingService.addToBag(tea);
  }

}])

shoppingCartApp.controller('bagController', ['$scope', 'shoppingService', function($scope, shoppingService) {

  $scope.shoppingBag = shoppingService.getShoppingBag();
  $scope.orderTotal = shoppingService.getOrderTotal();
  console.log($scope.shoppingBag);

  $scope.removeFromBag = function(item) {
    shoppingService.removeFromBag(item);
    $scope.orderTotal = shoppingService.getOrderTotal();
  };

  $scope.updateSubtotal = function(item) {
    shoppingService.updateSubtotal(item);
    $scope.orderTotal = shoppingService.getOrderTotal();
  }

}])
