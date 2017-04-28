'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// O(n)
List.prototype.copy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};

// O(n)
List.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

// O(n)
List.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];

  return {
    value: this[this.length - 1],
    list: result,
  };
};

//O(n)
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//O(n)
List.prototype.map = function(args, callback) {
//map is run on an array and returns a new array with the arguments proccessed
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = (this[i], args);
  }
  callback();
};

//O(n)
List.prototype.filter = function(args, callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if(args === this[i]) result[i] = this[i];
  }
  callback();
  return result;
};

//O(n)
List.prototype.reduce = function() {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }
  return result;
};
