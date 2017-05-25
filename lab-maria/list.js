'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// O(n)
List.prototype.copy = function(list) {
  let result = new List();
  for(let key in list) {
    result[key] = list[key];
  }
  return result;
};

List.prototype.cameronCopy = function(source) {
  let result = source;
  return result;
};

List.prototype.camPush = function(value) {
  let result = this.cameronCopy(this);
  result[result.length++] = value;
  return result;
};

// O(n)
List.prototype.push = function(value) {
  let result = this.copy(this);
  result[result.length++] = value;
  return result;
};

// O(n)
List.prototype.pop = function() {
  let result = this.copy(this);
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

List.prototype.map = function(callback) {
  let result = new List();
  for(let i = 0; i < this.length; i++) {
    let newVal = callback(this[i], i, this);
    result = result.push(newVal);
  }
  return result;
};

List.prototype.filter = function(callback) {
  let result = new List();
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i]) === true) {
      result.push(this[i]);
    }
  }
  return result;
};
List.prototype.reduce = function() {
  let result = 0;
  for(let i=0; i <this.length; i++) {
    result += this[i];
  }
  return result;
};
