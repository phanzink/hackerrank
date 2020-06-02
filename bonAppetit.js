// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let removeAmount = bill.slice(k, k+1).pop();
    let totalBill = bill.reduce((a,b) => a + b);
    let split = (totalBill - removeAmount) / 2;

    if(split == b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - split);
    }
}

//5
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
//bon appetit
console.log(bonAppetit([3, 10, 2, 9], 1, 7));