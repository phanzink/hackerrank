// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let newHigh = 0;
    let newLow = 0;

    let currentHigh = scores[0];
    let currentLow = scores[0];

    for (let s of scores) {
        if (currentHigh < s) {
            currentHigh = s;
            newHigh++;
        }

        if (currentLow > s) {
            currentLow = s;
            newLow++;
        }
    }
    return [newHigh, newLow];
}

//should be 2, 4
console.log(breakingRecords([ 10, 5, 20, 20, 4, 5, 2, 25, 1 ]));

//should be 4, 0
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));