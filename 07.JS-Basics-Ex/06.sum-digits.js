function solve(input) {
    const numAsString = Math.abs(input).toString();
    const numLength = numAsString.length;
    let sum = 0;
    for (let i = 0; i < numLength; i++) {
        sum += input % 10;
        input = Math.floor((input / 10));
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);