/* eslint-disable strict */
const substitution = require('../src/substitution');
const expect = require('chai').expect;


describe('Substitution', ()=>{
  it('should ignore capitalization', ()=>{
    const expected = substitution('A Message', 'xoyqmcgrukswaflnthdjpzibev');
    const actual = substitution('a message', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal(expected);
  });

  it('should maintain spaces', ()=>{
    //const expected = 'elp xhm xf mbymwwmfj dne';
    expect(substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
  });

  it('should return false if the given alphabet is not exactly 26 characters', ()=>{
    expect(substitution('thinkful', 'short')).to.be.false;
  });

  it('should return false if all characters in the given alphabet are not unique', ()=>{
    expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.be.false;
  });

  it('should correctly translate the given phrase, based on the alphabet given', ()=>{
    expect(substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
    expect(substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });

  it(('Should return an encoded message'), () => {
    const expected = 'jrufscpw';
    const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.eql(expected);
  });

  it(('Should return a decoded message'), () => {
    const expected = 'thinkful';
    const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false);
    expect(actual).to.eql(expected);
  });

  it(('Should return false input or alphabet is missing'), () => {
    const expected = false;
    const actual = substitution('', '');
    expect(actual).to.eql(expected);
  });
});
