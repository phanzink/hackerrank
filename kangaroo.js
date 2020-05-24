function kangaroo(x1, v1, x2, v2) {
    let canMakeIt = 'NO';
    let sameSpot = false;
    //same v different x will never reach each other
    if (v1 === v2 && x1 !== x2) {
        return 'NO';
    }

    while (!sameSpot) {
        // check if x1 passed and will never meet up
        if (v1 < v2) {
            if (x1 < x2) {
                break;
            }
        }
        // check if x2 passed and will never meet up
        if (v2 < v1) {
            if (x2 < x1) {
                break;
            }
        }

        if (x1 === x2) {
            sameSpot = true;
            return 'YES';
        }

        //move to the next jump
        x1 += v1;
        x2 += v2;
    }

    return canMakeIt;
    
}

//YES
console.log(kangaroo(0, 3, 4, 2));
//NO
console.log(kangaroo(0, 2, 5, 3));
//NO
console.log(kangaroo(43, 2, 70, 2));