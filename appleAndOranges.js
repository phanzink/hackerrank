// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleLocations = apples.map(apps => a + apps);
    let orangesLocations = oranges.map(on => b + on);

    let applesOnRoof = 0;
    let orangesOnRoof = 0;

    for (let apple of appleLocations) {
        if (s <= apple && s >= apple) {
            applesOnRoof++;
        }
    }

    for (let orange of orangesLocations) {
        if (t <= orange && t >= orange) {
            orangesOnRoof++;
        }
    }

    return [applesOnRoof, orangesOnRoof];
}