'use strict';

let array = [3, 5, 7, 12];
let filteredArray = [];

Array.prototype.forEach = function(callback){
  for (var i = 0; i < this.length; i++) {
    callback(array[i]);
  }
  return array;
};

Array.prototype.filter = function(callback){
  for (var i = 0; i < this.length; i++) {
    if(callback(this[i]) === true){
      filteredArray.push[i];
    }
  }
};



function addOne(add){
  return add += 1;

}

console.log(Array.prototype.filter(addOne));
