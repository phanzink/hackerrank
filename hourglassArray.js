// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let largestSum = -Infinity; 

    //we need to go through the row, then column
    //since we will be looking a head by two rows to find an hour glass
    //we dont want to go over row length
    //also this is not performant at all
    for(let row = 0; row < (arr.length - 2); row++) {
        //go through the cols again we will be looking a head two rows
        for (let col = 0; col < (arr[row].length - 2); col++){
            //find sums of the hour glass
            let sum = arr[row][col] + arr[row][col+1] + arr[row][col+2] + arr[row+1][col+1] + arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];
            if (largestSum < sum) {
                largestSum = sum;
            }
        }
    }
    return largestSum;
}

//1 1 1 
//  1
//1 1 1 would be 6
//how its built
//arr[row][col], arr[row][col+1], arr[row][col+2] 
//          arr[row+1][col+1]
//arr[row+2][col], arr[row+2][col+1], arr[row+2][col+2]
//should be 19
console.log(hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]));
//should be -19
console.log(hourglassSum([
    [ 0, -4, -6,  0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6,  0, -8, -6, -7],
]));
