'use strict';

var express = require('express'),
    controller = require('./product.controller'),
    multiparty = require('connect-multiparty'),
    uploadOptions = { autoFile: true, uploadDir: 'client/assets/uploads/'};

var router = express.Router();

router.post('/:id/upload', multiparty(uploadOptions), controller.upload);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
