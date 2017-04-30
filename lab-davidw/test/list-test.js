'use strict';

const List = require('../list.js');
const expect = require('chai').expect;


describe('testing list module array methods', function() {
//Copy test
  describe('test copy', function() {
    let list = new List(1, 2, 3, 4);
    it('should create a copy of the list object', done=> {
      let copiedList = list.copy(list);
      expect(copiedList).to.equal(list);
      done();
    });
  });


//Push test
  describe('push method', function() {
    let list = new List(1, 2, 3, 4);
    it('should add an element to the list length is now 5', done => {
      let pushed = list.testPush(5);

      expect(pushed).to.be.an('object')
      .that.has.property('length')
      .that.equals(5);
      done();
    });
  });

//POP test
  describe('pop method', function() {
    let list = new List(1, 2, 3, 4);
    it('should remove an element from the list, length is now 4', done => {
      let popped = list.testPop();

      expect(popped.list).to.be.an('object')
      .that.has.property('length')
      .that.equals(3);
      done();
    });
  });

//ForEach test // TODO: improve this test with an expect, need help
  describe('forEach method', function() {
    let list = new List(1, 2, 3, 4);
    it('should execute callback on each element in the list', done => {
      list.testForEach(console.log);
      done();
    });
  });

//Filter test
  // describe('filter method', function() {
  //   let list = new List(1, 2, 3, 4);
  //   it('should find the value in the list', done => {
  //     let filtered = list.testFilter(2);
  //     console.log('filtered: ' + filtered);
  //     expect(filtered).to.equal(2);
  //     done();
  //   });
  // });

//Map test
  // describe('map method', function() => {
  //   it('should ', done => {
  //     expect('');
  //     done();
  //   });
  // });

//Reduce test
//   describe('reduce method', function() {
//     let list = new List(1, 2, 3, 4);
//     // let reduceTest = list.testPush(2);
//     // let reduceTestTwo = reduceTest.testPush(4);
//     // let reduceTestThree = reduceTestTwo.testPush(9);
//
//     it('should start as an object with a length of 4', done => {
//       expect(list).to.be.an('object')
//       .that.has.property('length')
//       .that.equals(4);
//       done();
//     });
//
//     it('should finish as an object with a length of one value of 15', done => {
//       let reduced = list.testReduce(list);
//       expect(reduced).to.equal(10);
//       done();
//     });
//   });
});
