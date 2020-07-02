// Complete the countTriplets function below.
function countTriplets(arr, r) {
    // console.log(arr, r);
    let countPairs = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i - arr.length < 2) {
            for (let j = i+1; j < arr.length - 1; j++) {
                //check if it matches the rule
               if ((arr[i] * r) == arr[j]) {
                    for (let k = j+1; k < arr.length; k++) {
                        if((arr[j] * r) == arr[k]) {
                            countPairs = countPairs + 1;
                        }
                    }
                }
            }
        }
    }

    return countPairs;
}

//2
console.log(countTriplets([ 1, 2, 2, 4 ], 2));

//6
console.log(countTriplets([ 1, 3, 9, 9, 27, 81 ], 3));

//4
console.log(countTriplets([ 1, 5, 5, 25, 125 ], 5));