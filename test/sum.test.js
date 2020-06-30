const expect = require('chai').expect;
const sum = require('../sum');

describe('Sum function', () => {

  it('should return a promise', () => {
    // define inputs
    const arr = [1, '2', 'a', 3];
    // assert, actual === expected
    expect(sum(arr)).to.be.a('promise');
  });

  it('should sum an array of numbers', () => {
    return sum([1, 2, 3])
      .then(ans => {
        expect(ans).to.equal(6);
      });
  });
  
  it('should sum an array of numbers and numeric strings', () => {
    return sum([1, '2', 3])
      .then(ans => {
        expect(ans).to.equal(6);
      });
  });
  
  it('should sum an array of numbers and non-numeric strings', () => {
    return sum([1, '2', 'a', 3])
      .then(ans => {
        expect(ans).to.be.a('number').that.equal(6);
      });
  });


});