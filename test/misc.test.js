const expect = require('chai').expect;

describe('Miscellaneous', () => {

  it('to.equal', () => {
    const a = 2, c = 2;
    expect(a).to.equal(c, 'a === c');
  });

  it('to.deep.equal... going deep... to compare values *within* objects', () => {

    const a = { x: 5 };
    const b = { x: 5 };

    // false, b/c asking if {} === {}
    // and objects are unique (recall just-javascript rationale)
    // expect(a).to.equal(b); 

    // gotta go deep and evaluate the values of properties/variables 
    // *within* the objects
    expect(a).to.deep.equal(b);

  });

});