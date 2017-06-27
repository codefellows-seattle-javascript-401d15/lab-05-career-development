'use strict'

let List = require('./list.js')

let list = new List()
let newArray = list.push(2)


newArray.realPush(3)
newArray.realPush(34)
newArray.realPush(5)
console.log(newArray);
