'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const prototype = require('../lib/prototype');

describe('reduce method', function() {
  let List = [1, 2, 3, 4, 5, 6];

  it('should produce 21', function(done) {
    expect(List.reduce()).to.be.equal(21);
    done();
  });
});
