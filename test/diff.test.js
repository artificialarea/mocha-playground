const expect = require('chai').expect;
const diff = require('../diff');

describe('Diff function', () => {

  it('should return correctly if some elements in a_array differ', () => {
    // define inputs 
    const a = [1, 2, 3, 'foo', 'bar', 'bizz'];
    const b = [2, 8, 'foo', 'shizz'];
    // expect
    const expectedArr = [1, 3, 'bar', 'bizz'];
    // assert
    expect(diff(a, b)).to.deep.equal(expectedArr);
  });

  it('should return empty array [] if the same', () => {
    // define inputs 
    const a = [2, 8, 'foo', 'shizz'];
    const b = [2, 8, 'foo', 'shizz'];
    // expect
    const expectedArr = [];
    // assert
    expect(diff(a, b)).to.deep.equal(expectedArr);
  });
  
  it('should return a_array if no common elements', () => {
    // define inputs 
    const a = [2, 8, 'foo', 'shizz'];
    const b = [];
    // expect
    const expectedArr = [2, 8, 'foo', 'shizz']; 
    // assert
    expect(diff(a, b)).to.deep.equal(expectedArr);
  });

  it('should return empty array if a_array is empty', () => {
    // define inputs 
    const a = [];
    const b = [2, 8, 'foo', 'shizz'];
    // expect
    const expectedArr = []; 
    // assert
    expect(diff(a, b)).to.deep.equal(expectedArr);
  });

  it('should not include the item in b_array', () => {
    expect(diff([1, 2, 3], [1])).to.not.include(1);
  });

});