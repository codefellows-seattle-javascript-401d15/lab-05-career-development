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
List.prototype.filter = function(callback) {
  let newVals = new List();
  for(let i = 0; i < this.length; i++) {
    let tf = callback(this[i], i, this);
    if(tf === true) {
      newVals = newVals.push(this[i]);
    }
  }
  return newVals;
};

//O(n)
List.prototype.map = function(callback) {
  let newVals = new List();
  for(let i = 0; i < this.length; i++) {
    let newVal = callback(this[i], i, this);
    newVals = newVals.push(newVal);
  }
  return newVals;
};
//[1, 2, 3, 4].reduce( (prev, curr) => prev + curr, 0 );
//O(n)
List.prototype.reduce = function(callback, initialVal) {
  let acc;
  if(initialVal !== undefined) {
    acc = initialVal;
  }
  for(let i = 0; i < this.length; i++) {
    if(acc !== undefined) {
      acc = callback(acc, this[i]);
    }
    else {
      acc = this[i];
    }
  }
  return acc;
};
