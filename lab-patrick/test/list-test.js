'use strict';

const List = require('../list.js');
const expect = require('chai').expect;

describe('forEach functionality', function(){
  List.prototype.forEach = function(callback){
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
      
    }
  };
});
