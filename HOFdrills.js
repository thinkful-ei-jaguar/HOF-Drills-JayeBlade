'use strict';

//FUNCTIONS AS ARGUMENTS(1)
function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

function repeat(fn, n) {
  for(let i = 0; i < n; i++)
    fn();
}

repeat(hello, 5);
repeat(goodbye, 5);

//FUNCTIONS AS ARGUMENTS(2)
function filter(arr, fn) {
  // TASK: Define your function here
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//FUNCTIONS AS RETURN VALUES
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log( `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Centinela Ave and Olympic Blvd');

//FOREACH, FILTER, AND MAP









//REDUCE
function reduceDecoder(sentence) {
  let sentenceArray = sentence.split();
  let decodedSentence = sentenceArray.reduce(function(total, current){
    if(current.length === 3)
      total += ' ';
    else 
      total += current.charAt(current.length-1).toUpperCase();
    return total;
  }, '');
  console.log(decodedSentence);
}
reduceDecoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');





