function sockMerchant(n, ar) {
    let matches = {};
    let matchCount = 0;
    //loop the array of potenional matches
    for (let sock of ar) {
        //check if we have an item in the hash
        if (matches[sock]) {
            //add to hash
            matches[sock] = matches[sock] + 1;
            //if mod 2 = 0 we should add a pair
            if (matches[sock] % 2 == 0) {
                matchCount++;
            }
        } else {
            // set first one
            matches[sock] = 1;
        }
    }

    return matchCount;
}

//find pairs
//2 pairs
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));

//3 pairs
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20,]));