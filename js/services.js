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
    // getCategories: function (teas) {
    //   // var categoryArray = [];
    //   // for (var key, value in teas) {
    //   //   if (key === "categories") {
    //   //     categoryArray.push(value)
    //   //   }
    //   // }
    //   // return categoryArray;
    // }
    addToBag: function(tea) {
      tea.quantity = parseInt(tea.quantity);
      tea.editQuantity = false;
      tea.subtotal = tea.price * tea.quantity;
      shoppingBag.push(tea);
      orderTotal += tea.subtotal;
      console.log(shoppingBag);
    },
    getShoppingBag: function() {
      return shoppingBag
    },
    getOrderTotal: function() {
      return orderTotal
    },
    removeFromBag: function (item) {
      console.log(item);
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
