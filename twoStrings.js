// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s1a = s1.split('').sort();
    let s2a = s2.split('').sort();

    for (let i = 0; i < s1a.length; i++) {
        if (s2.includes(s1a[i])) {
            return 'YES';
        }
    }

    return 'NO';
}

//YES
console.log(twoStrings('hello', 'world'));

//NO
console.log(twoStrings('hi', 'world'));