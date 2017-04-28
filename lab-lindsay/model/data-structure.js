'use strict';

// arr.forEach(function callback(currentValue, index, array) {
    //your iterator
// }[, thisArg]);


// List constructor function
const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};
// O(n)
List.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
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
List.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];

  return {
    value: this[this.length - 1],
    list: result,
  };
};

//O(n) run time for forEach
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//O(n) run time filter
List.prototype.filter = function(callback) {
  let result = new List();
  for (let i = 0; i < this.length; i++) {
    let tf = callback(this[i], i, this);
    if(tf === true) {
      result = result.push(this[i]);
    }
  }
  return result;
};

//O(n) run time map
List.prototype.map = function(callback) {
  let T, a, k;
  let O = Object(this);
  let len = O.length >>> 0;

  if(typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  if(arguments.length > 1) {
    T = arguments[1];
  }
  A = new Array(len);
  k=0;
  while(k < len){
    let kValue = O[k];
    mappedValue = callback.call(T, kValue, k, O);
    A[k] = mappedValue;
  }
};

//// O(n)
List.prototype.copy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};
