'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var orderCtrlStub = {
  index: 'orderCtrl.index',
  show: 'orderCtrl.show',
  create: 'orderCtrl.create',
  update: 'orderCtrl.update',
  destroy: 'orderCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var orderIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './order.controller': orderCtrlStub
});

describe('Order API Router:', function() {

  it('should return an express router instance', function() {
    orderIndex.should.equal(routerStub);
  });

  describe('GET /api/orders', function() {

    it('should route to order.controller.index', function() {
      routerStub.get
                .withArgs('/', 'orderCtrl.index')
                .should.have.been.calledOnce;
    });

  });

  describe('GET /api/orders/:id', function() {

    it('should route to order.controller.show', function() {
      routerStub.get
                .withArgs('/:id', 'orderCtrl.show')
                .should.have.been.calledOnce;
    });

  });

  describe('POST /api/orders', function() {

    it('should route to order.controller.create', function() {
      routerStub.post
                .withArgs('/', 'orderCtrl.create')
                .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/orders/:id', function() {

    it('should route to order.controller.update', function() {
      routerStub.put
                .withArgs('/:id', 'orderCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/orders/:id', function() {

    it('should route to order.controller.update', function() {
      routerStub.patch
                .withArgs('/:id', 'orderCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/orders/:id', function() {

    it('should route to order.controller.destroy', function() {
      routerStub.delete
                .withArgs('/:id', 'orderCtrl.destroy')
                .should.have.been.calledOnce;
    });

  });

});
