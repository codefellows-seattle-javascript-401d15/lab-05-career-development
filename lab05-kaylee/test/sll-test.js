'use strict';

const expect = require('chai').expect;
const SLL = require('../lib/sll.js');

let list = new SLL();

describe('linked list methods', function() {
  describe('copy', function() {
    let copyMe = list.push(5);
    let testCopy = copyMe.copy();
    it('should return an SLL object', done => {
      expect(testCopy).to.be.an('object');
      done();
    });
    it('should produce two identical SLLs', done => {
      expect(copyMe).to.deep.equal(testCopy);
      done();
    });
    it('should have the same values, in the same positions, in the two lists', done => {
      expect(copyMe[0]).to.deep.equal(testCopy[0]);
      done();
    });
  });
  describe('push', function() {
    let testPush = list.push(5);
    it('should return an SLL object', done => {
      expect(testPush).to.be.an('object');
      done();
    });
    it('should have a length property', done => {
      expect(testPush).to.have.property('length');
      done();
    });
    it('should contain a value of 5 at position 0', done => {
      expect(testPush[0]).to.equal(5);
      done();
    });
  });
  describe('pop', function() {
    let testPush = list.push(5);
    let testPop = testPush.pop();
    it('should return an SLL object', done => {
      expect(testPop).to.be.an('object');
      done();
    });
    it('should return the value of the item popped off', done => {
      expect(testPop.value).to.equal(5);
      done();
    });
    it('should have a list property with a length of 0', done => {
      expect(testPop.list.length).to.equal(0);
      done();
    });
  });
  describe('forEach', function() {
    let testPush = list.push(5);
    let testForEach = testPush.forEach(function(element) {
      console.log('element: ', element);
    });
    it('testForEach should not exist', done => {
      expect(testForEach).to.not.exist;
      done();
    });
    it('testForEach should be undefined', done => {
      expect(testForEach).to.be.undefined;
      done();
    });
    it('testPush should have a value of 5 at position 0', done => {
      expect(testPush[0]).to.equal(5);
      done();
    });
  });
  describe('filter', function() {
    let testPush = list.push(5);
    let testFilter = testPush.filter(function(element) {
      console.log('element: ', element);
    });
    it('testPush should have a value of 5 at position 0', done => {
      expect(testPush[0]).to.equal(5);
      done();
    });
    it('should return an array', done => {
      expect(testFilter).to.be.an('array');
      done();
    });
    it('should not have any contents bc no valid condition to compare elements against', done => {
      expect(testFilter).to.be.empty;
      done();
    });
  });
  describe('map', function() {
    let testPush = list.push(5);
    let testMap = testPush.filter(function(element) {
      console.log('element: ', element);
    });
    it('testPush should have a value of 5 at position 0', done => {
      expect(testPush[0]).to.equal(5);
      done();
    });
    it('should return an array', done => {
      expect(testMap).to.be.an('array');
      done();
    });
    it('should not have any contents bc no valid condition to compare elements against', done => {
      expect(testMap).to.be.empty;
      done();
    });
  });
  describe('reduce', function() {
    let testPush = list.push(5);
    let testReduce = testPush.reduce(function(element) {
      console.log('element: ', element);
    });
    it('should return a number', done => {
      expect(testReduce).to.be.a('number');
      done();
    });
    it('testPush should have a value of 5 at position 0', done => {
      expect(testPush[0]).to.equal(5);
      done();
    });
    it('should return the number 2', done => {
      expect(testReduce).to.equal(5);
      done();
    });
  });
});
