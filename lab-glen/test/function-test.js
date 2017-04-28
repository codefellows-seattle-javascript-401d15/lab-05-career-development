const List = require('../lib/index');
const expect = require('chai').expect;

const testList = {0:1, 1:2, 2:3, 3:4};


describe('#List function test', function () {
  describe('#List', function () {
    it('Should create a new list ibject', function () {
      let list = new List(1,2,3,4);
      expect(list).to.be.instanceOf(Object);
    });
  });
});


describe('#forEach function test', function () {
  describe('the for each method', function () {
    it('should return the same console log', function () {
      let list = new List (1,2,3,4)
      expect(list.forEach(list).to.be.equal(console.log(testList)))
    })

  })

})
