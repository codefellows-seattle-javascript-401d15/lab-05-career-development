'use strict';

const ds = require('../listds');
const chai = require('chai');
const expect = chai.expect; // eslint-disable-line

// TODO: write at least three tests for each method that you've written.

// const test ='test';
// console.log(test);
// console.log(ds.Test(), 'somestring');

console.log('evaluating listds.js');
// describe('#Plant', function() {
describe('listds module', function() {
  // describe('#Test', function() {
  describe('the list data structure', function() {
    it.only('should implement forEach() as a method of list data structure', done => {
      expect(ds.Test()).to.equal('test');
      done();
    });
    it('should implement forEach() as pure methods on the List prototype', done => {
      expect(test).to.equal('test');
      done();
    });
    it('should implement filter() as a method of list data structure', done => {
      expect(test).to.equal('test');
      done();
    });
    it('should implement filter() as pure methods on the List prototype', done => {
      expect(test).to.equal('test');
      // expect(album).to.equal('album');
      done();
    });
    it('forEach() should be of type', done => {
      expect(test).to.be.a('string');
      // expect(req).to.be.a('object');
      done();
    });
    it('filter() should be of type', done => {
      expect(test).to.be.a('string');
      // expect(req).to.have.param('<param>');
      done();
    });
    it('should have a pop method', done => {
      expect(test).to.be.a('string');
      // expect(req).to.have.param('<param>');
      done();
    });
  });
});
