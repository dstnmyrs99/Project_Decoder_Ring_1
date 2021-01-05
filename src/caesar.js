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

// function caesar(input, shift, encode = true) {
//   const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   if (!input || !shift ||shift < -25 || shift > 25 || shift === 0) return false;

//   let string = input.toLowerCase();
//   let result = "";

//   for (i=0; i < string.length; i++) {
//       for (j=0; j < abc.length; j++) {
//           if (!abc.includes(string[i])) {
//               result += string[i];
//               break;
//           }

//           if (abc[j] === string[i]) {
//               let shifter = j + shift;
//               if (!encode) shifter = j - shift;
//               if (shifter < 0) {
//                   shifter += 26;
//                   result += abc[shifter];
//               } else if (shifter > 25) {
//                   shifter -= 26;
//                   result += abc[shifter];
//               } else result += abc[shifter];
//           }
//       }
//   }
// return result;
// }
