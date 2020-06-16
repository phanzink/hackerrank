function getMoneySpent(keyboards, drives, b) {
    let spent = 0;

    // this is not great
    for (let i = 0; i < keyboards.length; i++) {
        for (let d = 0; d < drives.length; d++) {
            let currentAmount = keyboards[i] + drives[d];

            if (b >= currentAmount && spent < currentAmount) {
                spent = currentAmount;
            }
        }
    }

    if (spent) {
        return spent;
    }

    return -1;
}
//9
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
//-1
console.log(getMoneySpent([4], [5], 5));