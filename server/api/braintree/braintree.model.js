'use strict';

var braintree = require('braintree'),
    config = require('../../config/environment'),
    isProduction = config.env === 'production';

var gateway = braintree.connect({
  environment: isProduction ? braintree.Environment.Production : braintree.Environment.Sandbox,
  merchantId: config.braintree.clientMerchant,
  publicKey: config.braintree.clientId,
  privateKey: config.braintree.clientSecret
});

module.exports = gateway;
