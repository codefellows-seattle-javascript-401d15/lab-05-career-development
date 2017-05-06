'use strict';

const List = require('../list');
const chai = require('chai');
const expect = chai.expect;

describe('#List tests', function (){

  describe('#map', () => {
    let testList = new List(4,5,6,7);
    let testMap = testList.map(data => {
      return data + 5;
    });
    console.log(testMap);
    it('should return the list data plus 5', done => {
      expect(testMap[0]).to.equal(9);
      expect(testMap[1]).to.equal(10);
      expect(testMap[2]).to.equal(11);
      expect(testMap[3]).to.equal(12);
      done();
    });
    it('should not equal a string', done => {
      expect(testMap[0]).to.not.equal('balogna');
      done();
    });
    it('it should not equal an object', done => {
      expect(testMap[0]).to.not.equal({});
      done();
    });
  });
  describe('#forEach', function() {
    let numList = [];
    let testList = new List(5,6,7,'carlo');
    console.log(testList);
    testList.forEach(data => {
      if(Number.isInteger(data)) numList.push(data);
      console.log(numList);

      it('should return an array of just numbers', done => {
        expect(numList).to.deep.equal([5,6,7]);
        done();
      });
      it('should not return an array of strings', done => {
        expect(numList).to.not.equal(['carlo']);
        done();
      });
    });
  });
  describe('#reduce', function() {
    let testList = new List(5,6,7,8);
    let testReduce = testList.reduce((acc, val) => {
      return acc + val;
    });

    it('should add up all the values', done => {
      expect(testReduce).to.equal(26);
      done();
    });
    it('should not return a string', done => {
      expect(testReduce).to.not.equal('GitToDaChoppa!');
      done();
    });
  });
  describe('#filter', function() {
    let testList = new List(5,6,7,'Carlo');

    let testFilter = testList.filter((data) => {
      data < 10;
      console.log('filter test ', data);
    });
    console.log('filter result ', testFilter);

    it('should not return an array with just Carlo in it', done => {
      expect(testFilter).to.not.equal(['Carlo']);
      done();
    });
  });
});
