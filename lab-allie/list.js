'use strict';

const List = module.exports = function () {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

//O(n)
List.prototype.testCopy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};

//O(n)
List.prototype.testPush = function(value) {
  let result = this.testCopy();
  result[result.length++] = value;
  return result;
};

//O(n)
List.prototype.testPop = function() {
  let result = this.testCopy();
  delete result[--result.length];
  return{
    value: this[this.length - 1],
    list: result
  };
};

//O(n)
List.prototype.testForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  };
};

//O(n)
List.prototype.testFilter = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push[i];
  }
  return result;
};

//O(n)
List.prototype.testMap = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    result.push(this[i]);
  }
  return result;
};

//O(n)
List.prototype.testReduce = function(callback) {
  let sum = 0;
  for(let i = 0; i < this.length; i++){
    sum += this[i];
    callback(sum, this[i], i, this);
  }
  return sum;
};