'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

//O(n)
List.prototype.copy = function(source) {
  let result = source;
  return result;
};

// push as a prototype of List
//O(n)
List.prototype.testPush = function(value) {
  let result = this.copy(this);
  result[result.length++] = value;
  return result;
};

// pop as a prototype of List
//O(n)
List.prototype.testPop = function() {
  let result = this.copy(this);
  let val = result[result.length -1];
  delete result[--result.length];

  return {
    value: val,
    list: result,
  };
};

// forEach as a prototype of List
// O(n)
List.prototype.testForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// filter as a prototype of List
// O(n)
List.prototype.testFilter = function(value) {
  let result = this.copy(this);
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) result.testPush(value);
  }
  return result;
};

// Tmap as a prototype of List
List.prototype.testMap = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]. i, this);
    newArray.push(this[i]);
  }
  return newArray;
};

// reduce as a prototype of List
List.prototype.testReduce = function(callback) {
  let sum = 0;
  for(let i = 0; i < this.length; i++) {
    sum += this[i];
    callback(sum, this[i], i, this);
  }
  return sum;
};
