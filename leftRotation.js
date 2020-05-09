function rotLeft(a, d) {
    //if shifting is the same lenght we dont need to 
    //do any processing
    if (d.length === a) {
        return a;
    }

    for (i = 0; i < d; i++) {
        let shifted = a[0];
        a.shift();
        a.push(shifted);
    }
    return a;
}

//should be [5, 1, 2, 3, 4];
console.log(rotLeft([1, 2, 3, 4, 5], 4));

//should be [1, 2, 3, 4, 5]
console.log(rotLeft([1, 2, 3, 4, 5], 5));