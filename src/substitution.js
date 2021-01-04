/* eslint-disable strict */


function substitution(input, alphabet, encode = true) {

  const actualAlphabet = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','q','r',
    's','t','u','v','w','x',
    'y','z'
  ];
  
  if(new Set(alphabet.split('')).size !== 26) return false;
  
  return input.toLowerCase().split('').map(letter => {
    if(actualAlphabet.includes(letter)){
      return encode ? alphabet[actualAlphabet.indexOf(letter)] : actualAlphabet[alphabet.indexOf(letter)];
    }else{
      return letter;
    }
  }).join('');
}
module.exports = substitution;
