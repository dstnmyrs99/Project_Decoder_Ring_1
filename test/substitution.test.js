/* eslint-disable strict */
const sub = require('../src/substitution');
const {expect} = require('chai');


describe('Substitution Cipher', ()=>{
  it('should ignore capitalization', ()=>{
    const expected = sub('A Message', 'xoyqmcgrukswaflnthdjpzibev');
    const actual = sub('a message', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal(expected);
  });

  it('should maintain spaces', ()=>{
    //const expected = 'elp xhm xf mbymwwmfj dne';
    expect(sub('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
  });

  it('should return false if the given alphabet is not exactly 26 characters', ()=>{
    expect(sub('thinkful', 'short')).to.be.false;
  });

  it('should return false if all characters in the given alphabet are not unique', ()=>{
    expect(sub('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.be.false;
  });

  it('should correctly translate the given phrase, based on the alphabet given', ()=>{
    expect(sub('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
    expect(sub('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });
});