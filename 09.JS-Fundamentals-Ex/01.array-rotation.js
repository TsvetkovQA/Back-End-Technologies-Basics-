function solve(arr, rotations) {
    while (rotations > 0) {
        arr.push(arr.shift());
        rotations--;
    }
    
    console.log(arr.join(' '));    
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);