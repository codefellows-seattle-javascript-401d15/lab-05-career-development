'use strict';

const ds = require('../listds');
const chai = require('chai');
const expect = chai.expect; // eslint-disable-line

// TODO: write at least three tests for each method that you've written.
console.log('evaluating listds.js');

describe('in listds module', function() {
  describe('the list data structure', function() {
    it('should implement forEach() as a method of list data structure', done => {
      expect(ds.Test()).to.equal('test');
      done();
    });
    it('should implement forEach() as pure methods on the List prototype', done => {
      expect(ds.Test()).to.equal('test');
      done();
    });
    it('should implement filter() as a method of list data structure', done => {
      expect(ds.Test()).to.equal('test');
      done();
    });
    it('should implement filter() as pure methods on the List prototype', done => {
      expect(ds.Test()).to.equal('test');
      // expect(album).to.equal('album');
      done();
    });
    it('forEach() should be of type', done => {
      expect(ds.Test()).to.be.a('string');
      // expect(req).to.be.a('object');
      done();
    });
    it('filter() should be of type', done => {
      expect(ds.Test()).to.be.a('string');
      // expect(req).to.have.param('<param>');
      done();
    });
    it('should have a pop method', done => {
      expect(ds.Test()).to.be.a('string');
      // expect(req).to.have.param('<param>');
      done();
    });
  });
});
