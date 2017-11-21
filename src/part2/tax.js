// src/part2/tax.js

var request = require('request');

module.exports = {
  calculate: function(subtotal, state, done) {
    if (state !== 'CA') {
      return done({ amount: 0 });
    }
    else {
      request.post({
        url: 'https://some-tax-service.com/request',
        method: 'POST',
        json: {
         subtotal: subtotal //added the subtotal in the request payload
        }
      }, function(error, response, body) {
        done(body);
      });
    }
  }
};
