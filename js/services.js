shoppingCartApp.factory('shoppingService', function($http) {
  var shoppingBag = [];
  var orderTotal = 0;

  return {
    getTeas: function() {
      return $http.get('js/teas.json')
      .then(function(result){
        var teas = result.data;
        return teas
      })
    },
    getCategories: function () {
      return $http.get('js/teas.json')
      .then(function(result){
        var categories = [];
        var teas = result.data;
        for (var i in teas) {
          for (var j in teas[i].categories){
            if (categories.indexOf(teas[i].categories[j]) === -1) {
              categories.push(teas[i].categories[j])
            }
          }
        }
        return categories;
      })
    },
    addToBag: function(tea) {
      tea.quantity = parseInt(tea.quantity);
      if (Number.isNaN(tea.quantity) === true) {
        tea.quantity = 1;
      };
      tea.editQuantity = false;
      tea.subtotal = tea.price * tea.quantity;
      shoppingBag.push(tea);
      orderTotal += tea.subtotal;
    },
    getShoppingBag: function() {
      return shoppingBag
    },
    getOrderTotal: function() {
      return orderTotal
    },
    removeFromBag: function (item) {
      orderTotal -= item.subtotal;
      var index = shoppingBag.indexOf(item);
      shoppingBag.splice(index, 1);
    },
    updateSubtotal: function(item) {
      orderTotal -= item.subtotal;
      item.quantity = item.revisedQuantity;
      item.editQuantity = false;
      item.subtotal = item.quantity * item.price;
      orderTotal += item.subtotal;
    }
  }

})
