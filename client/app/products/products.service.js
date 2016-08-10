'use strict';

angular.module('meanshopApp')
  .factory('Product', function ($resource){
    return $resource('/api/products/:id/:controler', null, {
      'update': { method: 'PUT' },
      'catalog': { method: 'GET', isArray: true,
        params: {
          controller: 'catalog'
        }
      },
      'search': { method: 'GET', isArray: true,
        params: {
          controller: 'search'
        }
      }
    });
  });
