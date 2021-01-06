/* eslint-disable strict */
function dustin(input, encode = true) {
  if(!input){
    return false;
  }
  const shift = 3;
  const regex = new RegExp('.{1,' + shift + '}', 'g');
  let separated = input.match(regex);
  let leftOvers = separated.pop();
  const shuffled = [];
  let start = 0;
  let amount = separated.length - 1;
  if(encode){
    while(shuffled.length < separated.length){
      shuffled.unshift(separated[amount]);
      shuffled.push(separated[start]);
      start ++;
      amount --;
    }
    if(shuffled.length > separated.length) shuffled.pop();
    console.log(shuffled);

    const newShuffled = shuffled.map(word => {
      const newWord = [];
      start = 0;
      amount = word.length -1;
      while(newWord.length < word.split('').length){
        newWord.unshift(word[amount]);
        newWord.push(word[start]);
        start ++;
        amount --;
      }
      
      if(newWord.length > word.length) newWord.pop();
      return newWord.join('');
    });
  
    newShuffled.push(leftOvers);
    console.log(newShuffled);
    return newShuffled.join('');
  }else{
    const decodeResult = [];
    const decodeShuffle = separated.map(word => {
      let newWord = [];
      start = 0;
      amount = word.length - 1;
      while(newWord.length < word.split('').length){
        newWord.push(word[amount]);
        newWord.push(word[start]);
        start ++;
        amount --;
      }
      if(newWord.length > word.length) newWord.pop();
      return newWord.join('');
    });
    start = 0;
    amount = decodeShuffle.length -1;

    while(decodeResult.length < decodeShuffle.length){
      decodeResult.unshift(decodeShuffle[amount]);
      decodeResult.push(decodeShuffle[start]);
      start += 1;
      amount --;
    }
    if(decodeResult.length > decodeShuffle.length) decodeResult.shift();
    decodeResult.push(leftOvers);
    return decodeResult.join('');
  }
}

console.log(dustin('f  iisthor wd ke was wItldoue  bolcoell!', 3, false));
module.exports = dustin;
// dustin('It would be cool if this worked as well!', 3, true));
// dustin(' tfishwo ker ad wsllet Iouwd le booc il!', 3, false));
