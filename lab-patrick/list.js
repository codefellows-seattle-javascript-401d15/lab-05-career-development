'use strict';

const List = module.exports = function(){
  for(let key in arguments){
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
List.prototype.filter = function(){
  let array1 =[];
  for (var i = 0; i < this.length; i++) {
    if(this[i] === true){
      array1.push(this[i]);
    }
  }
  return(array1);
};

//O(n)
List.prototype.map = function(callback){
  let array1 =[];
  for (var i = 0; i < this.length; i++) {
    array1.push(callback(this[i]));
  }
  return(array1);
};

// O(n)
List.prototype.reduce = function(callback, accumulator){
  let acc;
  if(accumulator){
    acc = accumulator;
  } else {
    acc = this[0];
  }
  let i;
  if(accumulator){
    i = 0;
  } else {
    i = 1;
  }
  for(i; i < this.length; i++){
    acc =callback(acc, this[i]);
  }
  return acc;
};
