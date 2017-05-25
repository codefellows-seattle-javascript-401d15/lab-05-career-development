const List = require('../list');
const chai = require('chai');
const expect = chai.expect;

describe('copy', function() {
  let list = new List(1, 2, 3, 4);
  let copied = list.copy(list);
  it('should create a copy of original list', done => {
    expect(copied).to.deep.equal(list);
    done();
  });
  it('when performing an operation on copied, it should not effect the original list', done => {
    //copied = copied.push(5);
    expect(copied.push(5).length).to.equal(5);
    expect(list.length).to.equal(4);
    done();
  });
});

describe('Camerons copy method', function() {
  let list = new List(1, 2, 3, 4);
  let copied = list.cameronCopy(list);
  it('should create a copy of original list', done => {
    expect(copied).to.equal(list);
    done();
  });
  it('when performing an operation on copied, it should not effect the original list', done => {
  //  copied = copied.camPush(5); //uses cameron's copy method inside the push method
    expect(copied.camPush(5).length).to.equal(5);
    // expect(list.length).to.equal(4); <-- Fails, demonstrating that Cam's method is creating a pointer to the original and not a separate, new list
    // ps I love Cameron ain't trying to shit on him and I always look at his work but wanted to see if his method was different from the given one
    done();
  });
  it('the same test instead using the regular push method', done => {
    expect(copied.push(6).length).to.equal(6);
    expect(list.length).to.equal(5); // <-- this passes because the original push calls the original copy, and returns the copy, which we assign to "copied" variable
    done();
  });
});

describe('pop', function() {
  let list = new List(1, 2, 3, 4);
  it('should pop the last item off the list', done => {
    expect(list.pop().list.length).to.equal(3);
    done();
  });
});

describe('map', function() {
  function timesTwo(val) {
    return val * 2;
  }
  it('should apply the function to every item in the list without changing the original list', done => {
    let list = new List(1, 2, 3, 4);
    let mapped = list.map(timesTwo);
    expect(list).to.not.equal(mapped);
    expect(list.map(timesTwo)).to.deep.equal(mapped);
    done();
  });
  it('should change the original list if applied to same var', done => {
    let list = new List(1, 2, 3, 4);
    list = list.map(timesTwo);
    let test = new List(2, 4, 6, 8);
    expect(list).to.deep.equal(test);
    done();
  });
});
describe('filter', function() {
  function isEven(val) {
    return val % 2 === 0;
  }
  it('filter out items based on a callback function', done => {
    let list = new List(1, 2, 3, 4);
    let even = list.filter(isEven);
    expect(list.filter(isEven)).to.deep.equal(even);
    done();
  });
});

describe('reduce', function() {
  it('should add the values', done => {
    let list = new List(1, 2, 3, 4);
    let test = list.reduce();
    expect(list.reduce()).to.equal(10);
    expect(test).to.equal(10);
    done();
  });
});
