function migratoryBirds(arr) {
    let maxBird = arr[0];
    let currentCount = 1;
    let birdMap = new Map();

    for (let b of arr) {
        if (birdMap.has(b)) {
            birdMap.set(b, birdMap.get(b) + 1);

            if (currentCount < birdMap.get(b))  {
                maxBird = b;
                currentCount = birdMap.get(b);
            } 
            if (b < maxBird && birdMap.get(b) === currentCount) {
                maxBird = b;
                currentCount = birdMap.get(b);
            }
        } else {
            birdMap.set(b, 1);
            //check if new top bird
            if (b < maxBird  && currentCount <= 1)  {
                maxBird = b;
            }
        }
    }

    return maxBird;
}

//1
console.log(migratoryBirds([1, 1, 2, 2, 3]));
// //4
console.log(migratoryBirds([4, 1, 4, 4, 5, 3]));
// //3
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))