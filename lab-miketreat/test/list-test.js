'use strict';

const List = require('../lib/lists.js');
const expect = require('chai').expect;


const mockList = new List('mike','allee','dodger','51',true); // Set as const to mock immutable dataset

describe('list.js - List object methods', function (){
  describe('List.prototype.copy', function(){

    let testList = mockList.copy();
    it('Should have properties equal to "51", "dodger", true, and 5', done => {
      expect(testList).to.have.property('3').that.equals('51');
      expect(testList).to.have.property('2').that.equals('dodger');
      expect(testList).to.have.property('4').that.equals(true); // note this is a boolen not a string
      expect(testList).to.have.property('length').that.equals(5); //note this is a number not a string
      done();
    });
  });
});

describe('list.js - List object methods', function(){
  describe('List.prototype.push', function(){
    let testList = mockList.push('Full Stack Dev enroute');

    it('Should have property "Full Stack Dev enroute" at property "5"', done => {
      expect(testList).to.have.property('5').that.equals('Full Stack Dev enroute');
      done();
    });
  });
});

describe('list.js - List object methods', function(){
  describe('List.protoype.pop', function(){
    let testList = mockList.pop();

    it('Should not have property with key "4"', done => {
      expect(testList).to.not.have.property('4');
      done();
    });
  });
});
