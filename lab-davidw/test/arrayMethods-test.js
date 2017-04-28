'use strict';

const List = require('../arrayMethods.js');
const expect = require('chai').expect;

let list = new List();

describe('testing array methods', function() {
  describe('push method', function() {
    let pushTest = list.testPush(2);

    it('should start with an array', done => {
      expect(pushTest).to.be.an('object');
      done();
    });
    it('should return the length of the array before the method was applied', done => {
      expect(pushTest['0']).to.equal(2);
      done();
    });
    it('should add an element to the list and return the new lenght of the list', done => {
      expect(pushTest).to.have.lengthOf(1);
      done();
    });
  });
});
