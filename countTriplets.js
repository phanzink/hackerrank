// Complete the countTriplets function below.
function countTriplets(arr, r) {
    // console.log(arr, r);
    let countPairs = 0;
    let hMap2 = {};
    let hMap3 = {};

    arr.forEach(val => {
        if (hMap3.hasOwnProperty(val)) {
            countPairs = countPairs + hMap3[val]
        }

        if (hMap2.hasOwnProperty(val)) {
            hMap3[val*r] = (hMap3[val*r] = hMap3[val*r] + hMap2[val]) || hMap2[val];
        }

        hMap2[val*r] = (hMap2[val*r] = hMap2[val*r] + 1) || 1;
    });

    return countPairs;
}

//2
console.log(countTriplets([ 1, 2, 2, 4 ], 2));

//6
console.log(countTriplets([ 1, 3, 9, 9, 27, 81 ], 3));

//4
console.log(countTriplets([ 1, 5, 5, 25, 125 ], 5));