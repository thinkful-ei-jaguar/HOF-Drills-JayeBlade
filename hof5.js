'use strict';

let inputPhrase = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let inputArray = inputPhrase.split(' ');

function reduce(arr) {
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      answer = answer.concat(` `);
    } else {
      let splitWord = arr[i].split('');
      answer = answer.concat(splitWord[splitWord.length - 1].toUpperCase());     
    }
  }
  return answer;
}

console.log(reduce(inputArray));

