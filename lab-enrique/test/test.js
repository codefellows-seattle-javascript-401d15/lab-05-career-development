const List = require('../lib/proto');
const expect = require('chai').expect;

describe('List Test', function () {

  describe('copy function', function () {
    it('Should create a new list Object', done => {
      let list = new List(2,2,2,2);
      let clone = list.copy(list);
      expect(list).to.be.instanceOf(Object);
      expect(clone).to.equal(list);
      done();
    });
  });

  describe('push method test', function() {
    it('should push an item to the end of an array', done => {
      let list = new List(1,2,3,4);
      let pushTest = list.push(5);
      expect(pushTest[4]).to.equal(5);
      expect(pushTest.length).to.equal(5);
      done();
    });
  });

  describe('pop method test', function () {
    it('should remove an item at the end of an array', done => {
      let list = new List(1,2,3,4);
      let popTest = list.pop();
      expect(popTest.list.length).to.equal(3);
      done();
    });
  });

  describe('forEach method test', function () {
    it('should run a callback function for every element', done => {
      let list = new List(1,2,3,4);
      list.forEach(console.log);
      done();
    });
  });

  describe('map method', function(){
    let testList = new List(1,2,3,4,5);
    describe('array returned is correct', function(){
      let timesTwo = testList.map(data =>{
        return data * 2;
      });
      it('should return an array of doubled numbers', done =>{
        expect(timesTwo[0]).to.equal(2);
        expect(timesTwo[1]).to.equal(4);
        done();
      });
    });
  });

  describe('methods', function() {
    describe('reduce method', function() {
      it('should sun the numbers', done => {
        let list = new List(4, 6, 8, 16);
        let newOutput = list.reduce(function(acc, curr) {
          return acc + curr;
        });
        expect(newOutput).to.equal(34);
        done();
      });
    });
  });
});
