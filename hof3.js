'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const avalancheWarning = hazardWarningCreator('Avalanche');
const tornadoWarning = hazardWarningCreator('Tornado spotted');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
avalancheWarning('Keystone Resort');
avalancheWarning('Breckenridge Resort');
tornadoWarning('Pulaski, TN');
tornadoWarning('Huntsville, AL');