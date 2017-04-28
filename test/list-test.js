'use strict';

const List = require('../list.js');
const expect = require('chai').expect;

describe('pop method', function(){
  it('should remove an item from an array', done => {
    let testArray = new List(2, 3, 5, 4, 6, 8, 10);
    let result = testArray.pop();
    console.log('results', result);
    console.log('test Array', testArray);
    expect(result.list.length).to.equal(testArray.length - 1);
    done();
  });
  it('should have a value of 10', done => {
    let testArray = new List(2, 3, 5, 4, 6, 8, 10);
    let result = testArray.pop();
    console.log('RESULTS!!!', result);
    expect(result.value).to.equal(10)
    done();
  })
  it('should have 8 as the last value', done =>{
    let testArray = new List(2, 3, 5, 4, 6, 8, 10);
    let result = testArray.pop();
    expect(result.list[5]).to.equal(8)
    done();
  })
});

describe('forEach method', function(){
  it('should apply a function to each item in an array', done => {
    let testArray = [2, 3, 1, 5, 6, 3, 9];
    function addOne(add){
      return add += 1;
    }
    expect(List.forEach(addOne).testArray).to.equal(testArray[0] === 3)
    done();
  })
})
