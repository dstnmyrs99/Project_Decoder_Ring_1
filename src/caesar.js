/* eslint-disable strict */
function caesar(input, shift, encode = true) {
  if(shift === 0 || shift > 25 || shift < -25 || !shift || !input){
    return false;
  }
  const alphabet = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','q','r',
    's','t','u','v','w','x',
    'y','z'
  ];
  if(!encode){
    shift *= -1;
  }
  return input.toLowerCase().split('').map(letter => {
    if(alphabet.includes(letter)){ 
      if(alphabet.indexOf(letter) + shift < 0){    
        return alphabet[alphabet.indexOf(letter) + shift + 26];
      }
      if(alphabet.indexOf(letter) + shift > 25){
        return alphabet[alphabet.indexOf(letter) + shift - 26];
      }
      return alphabet[alphabet.indexOf(letter) + shift];
    }else{
      return letter;
    }
  }).join('');
  
}
module.exports = caesar;

