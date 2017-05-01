'use strict';
const List = require('../lib/prototypes');
const chai = require('chai');

describe('test list module prototype methods', function() {
  describe('#copy', function () {
    it('should create a copy of the list'), done => {
      let list = new List(1, 2, 3, 4);
      let copiedList = list.copy(list);
      expect(copied).to.equal(list);
      done();
    }
  });
});
