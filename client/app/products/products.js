'use strict';

angular.module('meanshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/templates/products-list.html',
        controller: 'ProductsCtrl'
      })

      .state('newProduct', {
        url: '/product/new',
        templateUrl: 'app/products/templates/product-new.html',
        controller: 'ProductNewCtrl'
      })

      .state('viewProduct', {
        url: '/product/:id',
        templateUrl: 'app/products/templates/product-view.html',
        controller: 'ProductViewCtrl'
      })

      .state('editProduct', {
        url: '/product/:id/edit',
        templateUrl: 'app/products/templates/product-edit.html',
        controller: 'ProductEditCtrl'
      });
  });
