/* eslint-disable strict */
    
function polybius(input, encode = true) {

  const square = {
    'a':11,'b':21,'c':31,'d':41,'e':51,
    'f':12,'g':22,'h':32,'(i/j)':42,'i':42,'j':42,'k':52,
    'l':13,'m':23,'n':33,'o':43,'p':53,
    'q':14,'r':24,'s':34,'t':44,'u':54,
    'v':15,'w':25,'x':35,'y':45,'z':55};

  if(!encode){
    if(input.split(' ').join('').length % 2 === 1 || !input){
      return false;
    }
    const words = input.split(' ');
    let separated = words.map(input => input.match(/.{2}/g));
    const letters = separated.map((numbers) => numbers.map(letter =>
      // eslint-disable-next-line eqeqeq
      Object.keys(square).find(key => square[key] == letter)));
    const combinedLetters = letters.map(gap => gap.join(''));
    return combinedLetters.join(' ');
  }else{
    const words = input.toLowerCase().split(' ');
    const toLetters = words.map(word => word.split('').map(letter => square[letter]));
    const intoWords = toLetters.map(word => word.join(''));
    return intoWords.join(' ');
  }
}
module.exports = polybius;
