const List = require('../lib/list');
const expect = require('chai').expect;

describe('#List Function Tets', function () {

  describe('#List copy function', function () {
    it('Should create a new list Object', done => {
      let list = new List(4,4,4,4,4,4);
      let clone = list.copy(list);
      expect(list).to.be.instanceOf(Object);
      expect(clone).to.equal(list);
      done();
    });
  });

  describe('#push method function test', function() {
    it('should push an item to the end of an array', done => {
      let list = new List(4,4,4,4);
      let pushTest = list.push(9);
      expect(pushTest[4]).to.equal(9);
      expect(pushTest.length).to.equal(5);
      done();
    });
  });

  describe('#pop method function test', function () {
    it('should remove an item at the end of an array', done => {
      let list = new List(4,4,4,4);
      let popTest = list.pop();
      expect(popTest.list.length).to.equal(3);
      done();
    });
  });

  describe('#forEach method function test', function () {
    it('should run a callback function for every element', done => {
      let list = new List(4,4,4,4);
      list.forEach(console.log);
      done();
    });
  });

  // describe('#filter method function test', function () {
  //   it('should filter out a value', done => {
  //     let girls = new List('Paige', 'Kelly', 'Amy', 'Sally');
  //     let myBae = girls.filter('Paige');
  //     expect(myBae).to.equal('Paige');
  //     done();
  //   });
  // });

  describe('#map method function test', function () {
    it('should run a callback and return a new array', done => {
      let list = new List(4,4,4,4);
      let mapTest = list.map();
      console.log('ad' + mapTest);

      done()
    })
  })

  describe('#reduce function test', function () {
    it('should reduce an array of values into a single value', done => {
      let list = new List(4,4,4,4);
      let reduceTest = list.reduce();
      done()
    })
  })

});
