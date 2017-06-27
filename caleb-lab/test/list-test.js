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

    it('should not equal the original inserted ', done => {
      testForEach.forEach((testForEach) => {
        testForEach += 3;
        console.log(testForEach);
        expect(testForEach).to.not.equal(2);
        done();
      })
    })
  })

})
