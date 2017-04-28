'use strict';

Array.prototype.forEach = function(data){
  for(let i = 0; i < this.length; i++) {
    data(this[i]);
    console.log(data(this[i]));
  }
};

Array.prototype.forEach();
