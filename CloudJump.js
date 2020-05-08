function jumpingOnClouds(c) {
    let jumps = 0;
    let end = c.length;
    for (let i = 0; i < end; i++) {
        //lets try to figure out the next two numbers
        if (c[i+2] !== undefined && c[i+2] === 0) {
            jumps++;
            i = i+1;   
        } else if (c[i+1] !== undefined && c[i+1] === 0) {
            jumps++;
        }
        // console.log(i, i+2, i+1, jumps);
    }
    return jumps;
}

//4
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) === 4);
//3
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]) === 3);
//6
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0]) === 6);
//5
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 1, 0, 1, 0]) === 5);