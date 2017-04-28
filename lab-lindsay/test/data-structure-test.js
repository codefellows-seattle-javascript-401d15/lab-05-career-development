'use strict';

const assert = require('assert');
const List = require('../model/data-structure.js');
const expect = require('chai').expect;

describe('data-structures', function() {
  describe('forEach-method', function() {
    it('should iterate through the List array and push to newListArray with the same values', function(){
      let list = new List(3, 4, 8);
      let newListArray = [];
      list.forEach(function(val){
        newListArray.push(val);
      });
      console.log(newListArray);
      expect(newListArray).to.deep.equal([ 3, 4, 8 ]);
    });
  });
  describe('filter-method', function() {
    it('should create a new array of odd numbers', function() {
      let list = new List(3, 5, 8, 14);
      let newListArray = list.filter(function(val){
        if(val % 2 === 1) {
          return true;
        }
      });
      expect(newListArray).to.deep.equal(new List(3, 5));
    });
  });
});
