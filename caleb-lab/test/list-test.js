'use strict'

const List = require('../list.js')
const expect = require('chai').expect


describe('Methods on the List prototype', function(){
  let testList = new List()
  let testPush = testList.push(1)

  describe('list .push', () => {
    it('should be a "list" object', done => {
      expect(testPush).to.be.instanceOf(Object)
      done()
    })
    it('should have the value we passed in', done => {
      expect(testPush[0]).to.equal(1)
      done()
    })
    it('should be tracking the length of the list', done => {
      expect(testPush.length).to.equal(1)
      done()
    })
  })

  describe('list .REALpush', () => {
    it('should be a "list" object', done => {
      expect(testPush).to.be.instanceOf(Object)
      done()
    })
    it('should have the value we passed in', done => {
      testPush.realPush(2)
      expect(testPush[1]).to.equal(2)
      done()
    })
    it('should be tracking the length of the list', done => {
      expect(testPush.length).to.equal(2)
      done()
    })
  })

  describe('list .pop', () => {
    let testPop = testPush.pop()
    it('should still be an object', done => {
      expect(testPop).to.be.instanceOf(Object)
      done()
    })
    it('should return a value of undefined', done => {
      expect(testPop['0']).to.be.undefined
      done()
    })
    it('should have a length of 0', done => {
      expect(testPop.length).to.be.undefined
      done()
    })
  })

  describe('list .forEach', () => {
    let testForEach = testList.push(2);
    it('should yet again, still be an object[why would you write a test like this each time???]', done => {
      expect(testForEach).to.be.instanceOf(Object)
      done()
    })
    it('should not equal the original inserted', done => {
      testForEach.forEach(testForEach => {
        testForEach += 3
        expect(testForEach).to.not.equal(2)
        done()
      })
    })
    it('should equal the new value', done => {
      testForEach.forEach(testForEach => {
        testForEach += 3
        expect(testForEach).to.equal(5)
        done()
      })
    })
  })

  describe('list .filter', () => {
    let testFilter = testList.push(1000000000)//yes, 1,000,000,000
    it('you guessed it - is an object', done => {
      expect(testFilter).to.be.instanceOf(Object)
      done()
    })
    it('filter should return an instanceOf an Array', done => {
      let filterception = testFilter.filter(testFilter => {
        testFilter > 3
      })
      expect(filterception).to.be.instanceOf(Array)
      done()
    })
    it('should be an empty array', done => {
      let filterception = testFilter.filter(testFilter => {
        testFilter > 10
      })
      expect(filterception).to.be.empty //like my soul
      done()
    })
  })

  describe('list .map', () => {
    let testMap = testList.push(2);
    it('should yet again, still be an object [ffs]', done => {
      expect(testMap).to.be.instanceOf(Object)
      done()
    })
    it('should not equal the original inserted', done => {
      testMap.map(testMap => {
        testMap += 3
        expect(testMap).to.not.equal(2)
        done()
      })
    })
    it('should equal the new value', done => {
      testMap = testMap.map(testMap => {
        testMap += 3
        expect(testMap).to.equal(5)
        done()
      })
    })
  })

  describe('list .reduce', () => {
    let reduceTest = testList.push(0)
    reduceTest.realPush(1)
    reduceTest.realPush(2)
    reduceTest.realPush(3)
    reduceTest.realPush(4)

    it('should be an instanceOf object..', done => {
      expect(reduceTest).to.be.instanceOf(Object)
      done()
    })
    it('should have a length of 5', done => {
      expect(reduceTest.length).to.equal(5)
      done()
    })
    it('should reduce to 10', done => {
      let reducedTest = reduceTest.reduce((sum, val) => sum + val)
      expect(reducedTest).to.equal(10)
      done()
    })
  })

})
