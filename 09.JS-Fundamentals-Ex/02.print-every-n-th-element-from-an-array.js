function solve(arr, step) {
    const output = [];
    for (let i = 0; i < arr.length; i += step) {
        output.push(arr[i]);
    }
    
    return output;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));