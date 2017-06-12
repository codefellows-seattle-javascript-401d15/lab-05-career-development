'use strict';

const List = require('../list.js');
const expect = require('chai').expect;
let lists = new List();

describe('list.js', function(){
  describe('#aweForEach', function(){
    let testForEach = lists.awePush(2);
    console.log(typeof testForEach['0']);
    it('it should have a number of two at 0', done => {

      expect(testForEach['0']).to.equal(2);
      done();
    });
  });
  describe('#aweFilter', function(){
    let testFilter = lists.awePush(2);
    it('it should have a number of two at 0', done => {
      expect(testFilter['0']).to.equal(2);
      done();
    });
  });
  describe('#aweMap', function(){
    let testMap = lists.awePush(2);
    it('it should have a number of two at 0', done => {
      expect(testMap['0']).to.equal(2);
      done();
    });
  });
  describe('#aweReduce', function(){
    let testReduce = lists.awePush(2);
    it('it should have a number of two at 0', done => {
      expect(testReduce['0']).to.equal(2);
      done();
    });
  });
});
