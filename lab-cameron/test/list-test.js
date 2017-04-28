'use strict';

const List = require('../lib/list');
const chai = require('chai');
const expect = chai.expect;

describe('list module', function() {
  describe('#copy', function() {
    it('should create a copy of original list', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      let copied = list.copy(list);
      expect(copied).to.equal(list);
      done();
    });
  });

  describe('#push', function() {
    it('should add a value to the end of list', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      let pushed = list.push(5);
      expect(pushed.length).to.equal(5);
      done();
    });
  });

  describe('#pop', function() {
    it('should remove the last item from the list', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      let popped = list.pop();
      console.log(popped);
      expect(popped.list.length).to.equal(3);
      done();
    });
  });

  describe('#forEach', function() {
    it('should perform the callback on each list item', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      list.forEach(console.log);
      done();
    });
  });

  describe('#filter', function() {
    it('should find the value in the list', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      let found = list.filter(2);
      expect(found).to.equal(2);
      done();
    });
  });

  describe('#map', function() {
    it('should ', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      done();
    });
  });

  describe('#reduce', function() {
    it('should ', done => {
      let list = new List(1, 2, 3, 4); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
      done();
    });
  });
});
