'use strict';

const movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function checkProgress(movements) {
  for (let i = 0; i < movements.length; i++) {
    return movements[i][0] >= 0 && movements[i][1] >= 0;
  }
}

const totalSteps = movement.map(checkProgress(movement));




