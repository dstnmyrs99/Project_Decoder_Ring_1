/* eslint-disable strict */
const polybius = require('../src/polybius');
const expect = require('chai').expect;

describe('Polybius', ()=>{
  it('should translate i and j to 42', ()=>{
    expect(polybius('i')).to.equal('42');
    expect(polybius('j')).to.equal('42');
    expect(polybius('thinkful')).to.equal('4432423352125413');
  });

  it('should translate 42 to (i/j)', ()=>{
    const expected = polybius('42', false);
    const actual = '(i/j)';
    expect(actual).to.equal(expected);
    expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful');
  });

  it('should ignore capitalization', ()=>{
    expect(polybius('Hello world')).to.equal('3251131343 2543241341');
  });

  it('should maintain spaces in the message', ()=>{
    expect(polybius('Hello world')).to.equal('3251131343 2543241341');
    expect(polybius('3251131343 2543241341', false)).to.include(' ');
  });

  it('should return false if the number of characters given to decode exluding spaces is odd', ()=>{
    expect(polybius('44324233521254134', false)).to.equal(false);
  });

  it('should return a string even when encoding',()=>{
    expect(polybius('Hello world')).to.be.a('string');
  });
});