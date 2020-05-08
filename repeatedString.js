// Complete the repeatedString function below.
function repeatedString(s, n) {
    //first check if we only have a's
    let stringArr = s.split('');
    let uniqSet = new Set(stringArr);
    if (uniqSet.size === 1 && uniqSet.has('a')) {
        return n;
    }
    
    let totalACount = stringArr.filter(c => c === 'a').length;

    //It seems like this can be solved mostly by math
    //https://stackoverflow.com/questions/53509604/js-repeated-string-hackerrank-challenge
    //I thought about this too hard, and needed some stackOverflow help
    let total = parseInt(n / s.length);
    let remainder = n % s.length;
    return total * totalACount + stringArr.slice(0, remainder).filter(c => c === 'a').length;
}

//little bit of a weird one but we have a string s, 
//the length will be n, the string can be any length
//and length does not have to match n
//given aba, 10. aba will repeat every 3.1 times
console.log(repeatedString('aba', 10));

console.log(repeatedString('aba', 2));

console.log(repeatedString('a', 1000000000000));