// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let pairs = 0;

    if (ar.length === 1) {
        return 0;
    }

    for(let i = 0; i < ar.length - 1; i++) {
        for (let x = (i+1); x < ar.length; x++) {
            if ((ar[i] + ar[x]) % k ===  0) {
                pairs++;
            }
        }
    }
    return pairs;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));