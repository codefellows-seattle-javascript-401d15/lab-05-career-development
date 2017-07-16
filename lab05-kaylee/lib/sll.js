'use strict';

const SLL = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

//O(n)
SLL.prototype.copy = function() {
  let result = new SLL();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};

//O(n)
SLL.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

//O(n)
SLL.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];
  return {
    value: this[this.length - 1],
    list: result,
  };
};

//O(n)
SLL.prototype.forEach = function(callback) {
  for(let i=0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//O(n)
SLL.prototype.filter = function(callback) {
  let result = [];
  for(let i=0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

//O(n)
SLL.prototype.map = function(callback) {
  let result = [];
  for(let i=0; i < this.length; i++) {
    callback(this[i], i, this);
    result.push(this[i]);
  }
  return result;
};

//O(n)
SLL.prototype.reduce = function(callback) {
  let acc = 0;
  for(let i=0; i < this.length; i++) {
    acc += this[i];
    callback(this[i], i, this);
  }
  return acc;
};
