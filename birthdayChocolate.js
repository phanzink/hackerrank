function birthday(s, d, m) {
    //go though the choc
    let total = 0;
    if (s.length === m) {
        let sum = s.reduce((a,b) => a+b);
        return (sum === d ? 1 : 0);
    }

    for (let i = m; i < s.length + 1; i++) {
        //this is bad
        let add = 0;
        for (let check = (i - m); check < i; check++) {
            add += s[check];
        }

        if (add === d) {
            total++;
        }
    }

    return total;
}

//2
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
//0
console.log(birthday([1, 1, 1, 1, 1], 3, 2))
//1
console.log(birthday([4], 4, 1))
//13
console.log(birthday([4, 1, 4, 3, 3, 5, 1, 2, 4, 2, 5, 1, 5, 1, 4, 1, 3, 1, 
    5, 2, 2, 2, 1, 1, 3, 2, 5, 3, 1, 5, 4, 5, 2, 2, 1, 1, 2, 2, 4, 5, 4, 
    1, 5, 2, 1, 1, 2, 2, 1, 3, 2, 4, 4, 1, 3, 2, 2, 3, 1, 5, 4, 4, 1, 4, 
    2, 1, 2, 1, 5, 1, 3, 3, 4, 2, 1, 5, 5, 4, 2, 2, 3, 3, 4, 3, 1, 2, 1, 
    2, 4, 3], 16, 7))
