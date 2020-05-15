function checkMagazine(magazine, note) {
    let magHash = new Map();

    for (let word of magazine) {
        if (magHash.has(word)) {
            magHash.set(word,  magHash.get(word) + 1);
        } else {
            magHash.set(word, 1);
        }
    }

    for (let n of note) {
        if (magHash.has(n)) {
            if (magHash.get(n) < 1) {
                console.log('No');
                return;
            }
            magHash.set(n, magHash.get(n) - 1);
        } else {
            console.log('No');
            return;
        }
    }

    console.log('Yes');
}

//no
console.log(checkMagazine('two times three is not four four', 'two times two is four'));
//yes
console.log(checkMagazine('give me one grand today night', 'give one grand today'));
//yes
console.log(checkMagazine('ive got a lovely bunch of coconuts', 'ive got some coconuts'));