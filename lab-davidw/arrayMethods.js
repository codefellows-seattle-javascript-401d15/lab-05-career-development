'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
};

// push as a prototype of List
//O(n)
List.prototype.testPush = function(value) {
  let result = this.testCopy();
  result[result.length++] = value;
  return result;
};

// pop as a prototype of List
//O(n)
List.prototype.testPop = function() {
  let result = this.testCopy();
  delete result[--result.length];
  return{
    value: this[this.length - 1],
    list: result,
  };
};

// forEach as a prototype of List
// O(n)
List.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// filter as a prototype of List
// O(n)
List.prototype.filter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push[i];
  }
  return result;
};

// Tmap as a prototype of List
List.prototype.map = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]. i, this);
    newArray.push[i];
  }
  return newArray;
};

// reduce as a prototype of List
List.prototype.reduce = function(callback) {
  let total = 0;
  for(let i = 0; i < this.length; i++) {
    total =+ this[i];
    callback(total, this[i], i, this);
  }
  return total;
};
