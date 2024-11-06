function solve(arr) {
    let start = Number(arr[0]);
    let end = Number(arr[1]);
    let sum = 0; 
    let nums = '';
    for (let i = start; i <= end; i++) {
        nums += i + ' ';
        sum += i;
    }

    console.log(nums);    
    console.log(`Sum: ${sum}`);
}

solve([5, 10]);
solve([0, 26]);
solve([50, 60]);