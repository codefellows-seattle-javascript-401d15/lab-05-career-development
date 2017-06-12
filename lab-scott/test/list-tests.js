'use strict';

const List = require('../server');
// const expect = require('chai').expect;

describe('list function', function(){
  let testList = new List(1,2,3,4);
  console.log(testList.forEach(function(){}));
  describe('When running forEach', function(){
    it('should alter the list to add 2 to each value'), done =>{
      // expect(testList.forEach)
      done();
    };
  });
});
