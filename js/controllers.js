shoppingCartApp.controller('mainController', ['$scope', 'shoppingService', function($scope, shoppingService) {

  $scope.teas = shoppingService.getTeas()
  console.log($scope.teas);
  $scope.teas.quantity = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  $scope.addToBag = function(tea) {
    shoppingService.addToBag(tea);
  }

}])
