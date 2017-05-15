'use strict';

const List = require('../list.js');
const chai = require('chai');
const expect = chai.expect;

let testList = new List(1,2,3,4,5);

describe('forEach method', function(){
  let testArray =[];
  testList.forEach(data=>{
    testArray.push(data);
  });

  it('should equal the orignal array at index 0', done =>{
    expect(testArray[0]).to.equal(testList[0]);
    done();
  });
  it('should equal the orignal array at index 1', done =>{
    expect(testArray[1]).to.equal(testList[1]);
    done();
  });
  it('should equal the orignal array at index 2', done =>{
    expect(testArray[2]).to.equal(testList[2]);
    done();
  });
});

describe('map method', function(){
  describe('array returned is correct', function(){
    let timesTwo = testList.map(data =>{
      return data * 2;
    });
    it('should return an array of doubled numbers', done =>{
      expect(timesTwo[0]).to.equal(2);
      expect(timesTwo[1]).to.equal(4);
      expect(timesTwo[2]).to.equal(6);
      expect(timesTwo[3]).to.equal(8);
      expect(timesTwo[4]).to.equal(10);
      done();
    });
    it('should be 2 minus original values', done=>{
      let minusTwo = testList.map(data=>{
        return data - 2;
      });
      expect(minusTwo[0]).to.equal(-1);
      expect(minusTwo[1]).to.equal(0);
      expect(minusTwo[2]).to.equal(1);
      expect(minusTwo[3]).to.equal(2);
      expect(minusTwo[4]).to.equal(3);
      done();
    });
    it('should not return undefined', done =>{
      expect(timesTwo[0]).to.not.be.undefined;
      done();
    });
  });
});

describe('filter method', function(){
  let greaterThanThree = testList.map(data=>{
    return data > 3;
  });
  it('should return false, it is not greater than 3', done=>{
    expect(greaterThanThree[0]).to.be.false;
    done();
  });
  it('should return false, it is not greater than 3', done=>{
    expect(greaterThanThree[2]).to.be.false;
    done();
  });
  it('should return true, it is greater than 3', done=>{
    expect(greaterThanThree[4]).to.be.true;
    done();
  });
});

describe('reduce method', function(){
  let reduceTest = testList.reduce((acc, val)=>{
    return acc + val;
  });
  it('should return total of array added together', done=>{
    expect (reduceTest).to.equal(15);
    done();
  });
  it('should not equal a different number', done=>{
    expect (reduceTest).to.not.equal(20);
    done();
  });
  it('should not be undefined', done=>{
    expect (reduceTest).to.not.be.undefined;
    done();
  });
});
