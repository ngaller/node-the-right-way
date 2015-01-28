"use strict";

const
  rdfParser = require('../lib/rdf-parser.js'),
  expectedValue = require('./pg132.json');

exports.testRDFParser = function(test) {
  rdfParser(__dirname + '/pg132.rdf', function(err, book) {
    test.expect(2);
    //require('fs').writeFileSync(__dirname + '/pg132.json', JSON.stringify(book));
    test.deepEqual(book, expectedValue, "book should match expected");
    test.ifError(err);
    test.done();
  });
};

