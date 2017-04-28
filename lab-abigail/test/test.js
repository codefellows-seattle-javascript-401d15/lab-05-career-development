'use strict';

const expect = require('chai').expect;
const List = require('../lib/prototype');

let test = new List();

describe('reduce method', function() {

  let reduceList = test.testPush(2);
  let testReduceValue = reduceList.testReduce();

  it('has a value of 2', function(done) {
    expect(reduceList['0']).to.equal(2);
    done();
  });

  it('should exist', function(done) {
    expect(testReduceValue).to.exist;
    done();
  });

  it('should be a number', function(done) {
    expect(testReduceValue).to.be.a('number');
    done();
  });
});

describe('pop method', function() {

  let popList = test.testPush(2);
  let testPopValue = popList.testPop();

  it('should have length of 0', function(done) {
    expect(testPopValue.list.length).to.equal(0);
    done();
  });

  it('should have a testPop value of 2', function(done) {
    expect(testPopValue.value).to.equal(2);
    done();
  });

  it('should be a number', function(done) {
    expect(testPopValue.value).to.be.a('number');
    done();
  });

});

describe('map method', function() {
  let mapList = test.testPush(2);
  let testMapValue = mapList.testMap(function(ele) {
    console.log(`ELE ${ele}`);
  });

  it('has a value of 2', function(done) {
    console.log(mapList);
    expect(mapList['0']).to.equal(2);
    done();
  });

  it('has a length of 1', function(done) {
    expect(mapList.length).to.equal(1);
    done();
  });

  it('Test Value should be an array', function(done) {
    expect(testMapValue).to.be.a('array');
    done();
  });

  it('Test Value should have length of 0', function(done) {
    expect(testMapValue).have.lengthOf(0);
    done();
  });
});

describe('filter method', function() {
  let filterList = test.testPush(2);
  let testFilterValue = filterList.testFilter(function(ele) {
    console.log(`ELE ${ele}`);
  });

  it('has a value of 2', function(done) {
    expect(filterList['0']).to.equal(2);
    done();
  });

  it('should not exist', function(done) {
    expect(testFilterValue).to.be.an('array');
    done();
  });

  it('should be a number', function(done) {
    expect(testFilterValue).to.be.empty;
    done();
  });

});

describe('forEach method', function() {
  let forEachList = test.testPush(2);
  let testForEachValue = forEachList.testForEach(function(ele) {
    console.log(`ELE ${ele}`);
  });

  it('has a value of 2', function(done) {
    expect(forEachList['0']).to.equal(2);
    done();
  });

  it('should not exist', function(done) {
    expect(testForEachValue).to.not.exist;
    done();
  });

  it('should be a number', function(done) {
    expect(testForEachValue).to.be.undefined;
    done();
  });

});


describe('push method', function() {
  let pushList = test.testPush(2);
  let pushList2 = pushList.testPush(3);

  it('Original List to have a value of 2', function(done) {
    expect(pushList['0']).to.equal(2);
    done();
  });

  it('should exist', function(done) {
    expect(pushList2).to.exist;
    done();
  });

  it('should be a number', function(done) {
    expect(pushList2).to.not.deep.equal(pushList);
    done();
  });

  it('', function(done) {
    expect(pushList2['1']).to.equal(3);
  })

});

describe('copy method', function() {
  let copyList = test.testPush(2);
  let testCopyValue = copyList.testCopy();

  it('has a value of 2', function(done) {
    expect(copyList['0']).to.equal(2);
    console.log(testCopyValue);
    done();
  });

  it('Test Copy to have a value of 2', function(done) {
    expect(testCopyValue['0']).to.equal(2);
    done();
  });

  it('Test Copy should match original', function(done) {
    expect(testCopyValue).to.deep.equal(copyList);
    done();
  })

  it('Test Copy should exist', function(done) {
    expect(testCopyValue).to.exist;
    done();
  });

  it('should be a number', function(done) {
    expect(testCopyValue).to.be.an('object');
    done();
  });

});
