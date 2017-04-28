'use strict';

const List = require('../lib/methods')
const expect = require('chai').expect;

describe('methods', function() {
  describe('forEach method', function() {
    it('should log 4, 6, 8, 16', done => {
      let list = new List(4, 6, 8, 16);
      let newOutput = [];
      list.forEach(function(val) {
        newOutput.push(val);
      });
      expect(newOutput).to.deep.equal([4, 6, 8, 16]);
      done();
    });
  });
});

describe('methods', function() {
  describe('filter method', function() {
    it('should create a new array ', done => {
      let list = new List(4, 5, 6, 8, 9, 16, 99);
      let newOutput = list.filter(function(val) {
        return val % 2 === 0;
      });
      expect(newOutput).to.deep.equal(new List(4, 6, 8, 16));
      done();
    });
  });
});

describe('methods', function() {
  describe('map method', function() {
    it('should create a new array ', done => {
      let list = new List(4, 6, 8, 16);
      let newOutput = list.map(function(val) {
        return val * 2;
      });
      expect(newOutput).to.deep.equal(new List(8, 12, 16, 32));
      done();
    });
  });
});
