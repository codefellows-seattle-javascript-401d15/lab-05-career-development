'use strict';

const List = module.exports = function(){
  for(let keys in arguments){
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};


//O(n)
List.prototype.forEach = function(callback){
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
//O(n)
List.prototype.filter = function(callback){
  let array1 =[];
  for (var i = 0; i < this.length; i++) {
    if(this[i] === true){
      array1.push(this[i]);
    }
  } callback(array1);
};
//O(n)
List.prototype.map = function(callback){
  let array1 =[];
  for (var i = 0; i < this.length; i++) {
    array1.push(callback(this[i]));
  }
  callback(array1);
};

// O(n)
List.prototype.reduce = function(callback){
  let array1 = [];
  let results;
  for (var i = 0; i < this.length; i++) {
    results += this[i];
    array1.push(results);
  }
  callback(array1);
};
