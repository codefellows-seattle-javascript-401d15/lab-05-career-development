'use strict';

const List = module.exports = function() {
  for(let keys in arguments) {
    this[key] = arguemtns[key];
  }
};

// forEach as a prototype of List
// O(n)
List.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(array[i], i, this);
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
