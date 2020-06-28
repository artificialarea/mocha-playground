const expect = require('chai').expect;
const sort = require('../sort');

// HINT:
// to compare two arrays use the .deep assert function
// https://www.chaijs.com/api/bdd/#deep

describe('Sort function', () => {

  

  it('array is sorted in ascending order', () => {

    // define inputs 
    const actualArr = [14, 8, 2, 7, 1];
    // expect
    const expectedArr = [1, 2, 7, 8, 14];

    // invoke function (apparently not needed, or working)
    const fn = () => {
      sort(actualArr);
    }
    console.log('fn: ', fn, sort(actualArr))

    // assert that expected === actual
    // expect(fn).to.deep.equal(expectedArr) 
    expect(sort(actualArr)).to.deep.equal(expectedArr)

  });


});