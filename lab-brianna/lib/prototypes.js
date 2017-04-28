'use strict';

function List () {
  for(let keys in arguments) {
    this[key] = arguments[key];
  }
}

// O(n)
List.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//.filter()
List.prototype.filter = function

//.map()
List.prototype.map = function

//.reduce()
List.prototype.reduce = function 
