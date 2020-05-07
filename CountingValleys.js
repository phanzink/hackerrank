function countingValleys(n, s) {
  let stepsArr = s.split('');
  let sealevel = 0;
  let isStillInValley = 0;
  let valleys = 0;

  for (let step of stepsArr) {
    if (step === 'D') {
      sealevel--;
    }

    if (step === 'U') {
      if (sealevel == -1) {
        isStillInValley = 0;
      }
      
      sealevel++;
    }

    if (sealevel === -1 && isStillInValley == 0) {
      isStillInValley = 1;
      valleys++;
    }
  }

  return valleys;
}

//8 is steps 
console.log(countingValleys(8, 'UDDDUDUU'));
// 1 valley
//  _/\      _
//     \    /
//      \/\/

console.log(countingValleys(8, 'DDUUUUDD'));
// 1 valley
//         /\
//   _    /  \_
//    \  /   
//     \/

console.log(countingValleys(12, 'DDUUDDUDUUUD'));
// 2 valleys
// _           /\_
//   \  /\    /
//    \/  \/\/

console.log(countingValleys(100, 'DUDDDUUDUU'));
//should be 2

console.log(countingValleys(100, 'DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD'));
//should be 2