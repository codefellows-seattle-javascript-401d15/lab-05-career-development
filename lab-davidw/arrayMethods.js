'use strict';

cont List = module.exports = function() {
  for(let keys in arguments) {
    this[key] = arguemtns[key]
  }
}

// TODO: write forEach as a prototype of List
// O(n)
List.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(array[i], i, this)
  }
}

// TODO: write filter as a prototype of List

// TODO: write map as a prototype of List

// TODO: write reduce as a prototype of List
