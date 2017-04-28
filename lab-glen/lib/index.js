'use strict';

const List = module.exports = function () {
  for(let key in arguments) {
    this[key] = arguments[key]
  }
  this.length = arguments.length
}

//O (n)
List.prototype.copy = function (source) {
  let results = source
  return results
}

//O(n)
List.prototype.push = function (value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

//O(n)
// List.protoytype.pop = function () {
//   let result = this.copy();
//   delete result[--result.length];
//
//   return {
//     value: this[this.length -1],
//     list: result,
//   };
// };

// O(n)
List.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this)
    console.log(this)
  }
}

List.prototype.filter = function (callback) {
  let result = this.copy()
  for (var i = 0; i < this.length; i++) {
    callback()
    if(this[i] === value) {
      result.push(this[i])
    }
  }
  return result
}

List.prototype.map = function (callback) {
  let result = this.copy()
  for (var i = 0; i < this.length; i++) {
    callback(this[i], [i], this)
  }
  return result;
}

List.prototype.reduce = function (callback) {
  for (var i = 0; i < this.length; i++) {
    this[i]
  }
}
