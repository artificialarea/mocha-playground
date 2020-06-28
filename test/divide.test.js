const expect = require('chai').expect;
const divide = require('../index');

// expanded version
describe('Divide function', () => {

  it('should divide positive integers correctly', () => {
    
    // DEFINE inputs
    const a = 8, b = 4;
    // EXPECT
    const expectedAnswer = 2;

    // ACTUAL invoke function
    const acutalAnswer = divide(a, b)

    // ASSERT that expected === actual
    expect(acutalAnswer).to.equal(expectedAnswer);
    // ^^^^^^^
    // using CHAI assertion library 'expect' syntax
    // https://www.chaijs.com/guide/styles/#expect

  });

  it('should throw an error when divide by zero', () => {
   
    // define inputs
    const a = 8, b = 0;
    
    // set up the function call
    // to prevent interuption of normal execution flow when an exception is thrown, we wrap the invocation of our function divide() in another function
    const fn = () => {
      divide(a, b)
    }
    
    // assert that exception is thrown
    expect(fn).to.throw();

  });
});


// condensed version
// describe('Divide function', () => {
//   it('should divide positive integers correctly', () => {
//     expect(divide(8, 4)).to.equal(2);
//   });

//   it('should throw an error when divide by zero', () => {
//     expect(() => { divide(8, 0) }).to.throw();
//   });
// });