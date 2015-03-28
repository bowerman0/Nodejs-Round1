'use strict';

var PaymentProcessor = require('../lib/PaymentProcessor.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var create_payment_json_amex_thb = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "amex",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "THB",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_amex_usd = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "amex",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "USD",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_visa_aud = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "AUD",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_visa_eur = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "EUR",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_visa_thb = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "THB",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_visa_hkd = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "HKD",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_visa_sgd = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "SGD",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

var create_payment_json_visa_usd = {
  "intent": "sale",
  "payer": {
    "payment_method": "credit_card",
    "funding_instruments": [{
      "credit_card": {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "874",
        "first_name": "Joe",
        "last_name": "Shopper",
        "billing_address": {
          "line1": "52 N Main ST",
          "city": "Johnstown",
          "state": "OH",
          "postal_code": "43210",
          "country_code": "US"
        }
      }
    }]
  },
  "transactions": [{
    "amount": {
      "total": "7",
      "currency": "USD",
      "details": {
        "subtotal": "5",
        "tax": "1",
        "shipping": "1"
      }
    },
    "description": "This is the payment transaction description."
  }]
};

exports['processPaymentRequest'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no throw': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(
        function() {
          var processor = new PaymentProcessor();
          processor.processPaymentRequest(
            create_payment_json_visa_usd,
            function(error){
              test.ifError(error);
            }
            );},
        Error,
        'Create payment should not fail.');
    test.done();
  },
  'visa pay usd': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_visa_usd,
        function(error, message){
          test.ifError(error);
          test.equal(message,
            'visa payment succeeded with paypal.',
            'createPaypalPayment usd should succeed.');
          test.done();
        });
  },
  'visa pay eur': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_visa_eur,
        function(error, message){
          test.ifError(error);
          test.equal(message,
            'visa payment succeeded with paypal.',
            'createPaypalPayment eur should succeed.');
          test.done();
        });
  },
  'visa pay aud': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_visa_aud,
        function(error, message){
          test.ifError(error);
          test.equal(message,
            'visa payment succeeded with paypal.',
            'createPaypalPayment aud should succeed.');
          test.done();
        });
  },
  'visa pay thb': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_visa_thb,
        function(error, message){
          test.ifError(error);
          test.equal(message,
            'visa payment succeeded with braintree.',
            'createPaypalPayment thb should succeed.');
          test.done();
        });
  },
  'visa pay hkd': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_visa_hkd,
        function(error,message){
          test.ifError(error);
          test.equal(message,
            'visa payment succeeded with braintree.',
            'createPaypalPayment hkd should succeed.');
          test.done();
        });
  },
  'visa pay sgd': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_visa_sgd,
        function(error, message){
          test.ifError(error);
          test.equal(message,
            'visa payment succeeded with braintree.',
            'createPaypalPayment sgd should succeed.');
          test.done();
        });
  },
  'amex pay usd': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_amex_usd,
        function(error, message){
          test.ifError(error);
          test.equal(message,
            'amex payment succeeded with paypal.',
            'createPaypalPayment amex usd should succeed.');
          test.done();
        });
  },
  'amex pay thb': function(test) {
    test.expect(2);
    // tests here
    var processor = new PaymentProcessor();
    processor.processPaymentRequest(
        create_payment_json_amex_thb,
        function(error,message){
          test.notEqual(error,
            null,
            //new Error('American Express must be used with US Dollars only.'),
            'createPaypalPayment amex thb should fail.');
          test.equal(message,
            'American Express must be used with US Dollars only.',
            'createPaypalPayment amex thb should fail.');
          test.done();
        });
  },
};
