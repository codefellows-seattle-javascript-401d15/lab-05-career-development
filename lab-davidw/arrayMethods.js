'use strict';

cont List = module.exports = function() {
  for(let keys in arguments) {
    this[key] = arguemtns[key]
  }
}

// forEach as a prototype of List
// O(n)
List.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(array[i], i, this)
  }
}

// TODO: write filter as a prototype of List
// O(n)
List.prototype.filter = function(callback) {

}

// TODO: write map as a prototype of List
List.prototype.map = function(callback) {

}

// TODO: write reduce as a prototype of List
List.prototype.reduce = function(callback) {
  let total = 0;
  for (var i = 0; i < this.length; i++) {
    callback(total += array[i].this)
  }
}
