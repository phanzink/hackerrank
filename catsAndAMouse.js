// Complete the catAndMouse function below.
//cat, cat, mouse
//x = Cat A
//y = Cat B
//z = Mouse C
function catAndMouse(x, y, z) {
    //how how far away each cat is
    let catA = Math.abs(z - x);
    let catB = Math.abs(z - y);

    if (catA === catB) {
        return 'Mouse C';
    }

    if (catA < catB) {
        return 'Cat A';
    }

    return 'Cat B';
}
//Cat B
console.log(catAndMouse(1, 2, 3));
//Mouse C
console.log(catAndMouse(1, 3, 2));