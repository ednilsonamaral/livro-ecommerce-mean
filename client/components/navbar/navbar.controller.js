'use strict';

angular.module('meanshopApp')
  .controller('NavbarCtrl', function ($scope, Auth, $rootScope, $state, $window, $timeout) {
    $scope.menu = [
      {
        'title': 'Home',
        'state': 'main'
      },
      {
        'title': 'Products',
        'state': 'products'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.search = function() {
      $rootScope.$broadcast('search:term', $scope.searchTerm);
    };

    $scope.redirect = function() {
      $state.go('products');

      // vai assegurar que a função seja chamada somente depois que todos os outros eventos foram disparados
      $timeout(function() {
        // vai verificar se a caixa de busca detem o FOCO da pagina
        var searchBox = $window.document.getElementById('searchBox');
        if (searchBox) {
          searchBox.focus();
        }
      });
    };
  });
