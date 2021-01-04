/* eslint-disable strict */
const caesar = require('../src/caesar');
const expect = require('chai').expect;


describe('Caesar', ()=>{
  it('should return false if shift value is < -25', ()=>{
    expect(caesar('false', -26)).to.equal(false);
  });
  it('should return false if shift value is > 25', ()=>{
    expect(caesar('false', 99)).to.be.false;
  });
  it('should return false if shift value is 0', ()=>{
    expect(caesar('false', 0)).to.be.false;
  });
  it('should return false if shift value is not given', ()=>{
    expect(caesar('false')).to.be.false;
  });

  it('should maintain spaces and other non-alphabetic symbols', ()=>{
    expect(caesar('a !( a', 1)).to.equal('b !( b');
    const expected = caesar('a !( a', 1, false);
    const actual = 'z !( z';
    expect(actual).to.equal(expected);
  });

  it('should handle shifts that go past the end of the alphabet', ()=>{
    expect(caesar('z', 3)).to.equal('c');
    expect(caesar('c', 3, false)).to.equal('z');
  });

  it('should handle shifts in the negative direction', ()=>{
    expect(caesar('z', -3)).to.equal('w');
    expect(caesar('c', -3, false)).to.equal('f');
  });

  it('should ignore capitalization', ()=>{
    expect(caesar('This is a secret message!', 8)).to.equal('bpqa qa i amkzmb umaaiom!');
    expect(caesar('BPQA qa I amkzmb umaaiom!', 8, false)).to.equal('this is a secret message!');
  });
});