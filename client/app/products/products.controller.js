'use strict';

angular.module('meanshopApp')
  .controller('ProductsCtrl', function($scope, Product){
    // mostrando todos os produtos - READ (QUERY)
    $scope.products = Product.query();
  })
  .controller('ProductViewCtrl', function($scope, $state, $stateParams, Product){
    // mostrando apenas um produto - READ (GET)
    $scope.product = Product.get({id: $stateParams.id});

    // deletando um produto - DELETE
    $scope.deleteProduct = function(){
      Product.delete($scope.product);
      $state.go('products');
    }
  })
  .controller('ProductNewCtrl', function($scope, $state, Product){
    // criando nova instancia para adicionar o novo produto
    $scope.product = {};
    $scope.addProduct = function(product){
      Product.create($scope.product);
      $state.go('products');
    }
  })
  // editando um produto - UPDATE
  .controller('ProductEditCtrl', function($scope, $state, $stateParams, Product){
    $scope.product = Product.get({id: $stateParams.id});

    $scope.editProduct = function(){
      Product.update($scope.product);
      $state.go('products');
    }
  });
