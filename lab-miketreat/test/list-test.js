'use strict';

const List = require('../lib/lists.js');
const expect = require('chai').expect;


const mockList = new List('mike','allee','dodger','51', 1214, true); // Set as const to mock immutable dataset

describe('list.js - List object methods',  ()=>{
  describe('#copy', () => {

    let testList = mockList.copy();
    it('Should have properties equal to "51", "dodger", and true', done => {
      expect(testList).to.have.property('3').that.equals('51');
      expect(testList).to.have.property('2').that.equals('dodger');
      expect(testList).to.have.property('5').that.equals(true); // note this is a boolen not a string
      done();
    });
  });
});

describe('list.js - List object methods', () => {
  describe('#push', () => {
    let testList = mockList.push('Full Stack Dev enroute');
    it('Should have property "Full Stack Dev enroute" at property "5"', done => {
      expect(testList).to.have.property('6').that.equals('Full Stack Dev enroute');
      expect(testList).to.have.property('length').that.equals(7); //note this is a number not a string;
      done();
    });
  });
});

describe('list.js - List object methods', () =>{
  describe('#pop', () => {
    let testList = mockList.pop();
    it('Should not have property with key "4"', done => {
      expect(testList).to.not.have.property('4');
      done();
    });
  });
});

describe('list.js - List object methods', () => {
  describe('#forEach', () => {
    let results = [];
    mockList.forEach(ele => {
      if(isNaN(ele)) results.push(ele);
    });
    it('should be an array with 3 strings in it', done => {
      expect(results).to.deep.equal(['mike','allee','dodger']);
      done();
    });
  });
});

describe('list.js - List object methods', () => {
  describe('#filter', () => {
    let results = mockList.filter('mike','dodger', '27' , 51, 1214, 'allee','clint');
    it('should have filtered correctly by pushing only matching results into the results array', done => {
      expect(results).to.not.include('clint');
      expect(results).to.not.include(51);
      expect(results).to.include('dodger');
      done();
    });
  });
});

describe('list.js - List object methods', () => {
  describe('#map', () => {
    let testList = new List(1,2,3,4,5);
    let dblTestList = testList.map(ele => {
      return ele * 2;
    });
    it('should return doubled values ', done => {
      expect(dblTestList).to.not.include(3);
      expect(dblTestList).to.not.include(1);
      expect(dblTestList[0]).to.equal(2);
      expect(dblTestList[4]).to.equal(10);
      done();
    });
  });
});

describe('list.js - List object methods', () => {
  describe('#reduce', () => {
    // number mock dataset
    let numList = new List(1,5,2,71,20);
    let sum = numList.reduce( (acc,val) => { return acc + val; });

    it('should be 99, meaning all values were added together.', done => {
      expect(sum).to.be.equal(99);
      done();
    });

    let multiplyNumList = numList.reduce( (acc,val) => { return acc * val; } , 1); //Note passing in the 1 as the initial value. Needed for multiplication as acc norm starts at 0;
    it('should be 14200, meaning all values were added together.', done => {
      expect(multiplyNumList).to.be.equal(14200);
      done();
    });

    // string data set. Doesn't use the acc so may note be useful but wth.
    let namesList = new List('allee','allee','allee','allee','mike','mike','mike','mike','mike','cleo');
    let uniqueList = [];
    namesList.reduce( (acc,val) => {
      if(!uniqueList.includes(val)){
        uniqueList.push(val);
      }
    });
    it('should be a unique list of items, meaning no duplicate values.', done => {
      expect(uniqueList[0]).to.be.equal('allee');
      expect(uniqueList[1]).to.be.equal('mike');
      expect(uniqueList[2]).to.be.equal('cleo');
      expect(uniqueList.length).to.be.equal(3);
      expect(uniqueList.length).to.not.be.equal(10);
      done();
    });
  });
});
