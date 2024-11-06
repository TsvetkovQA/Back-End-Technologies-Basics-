function solve(number) {
    let evenSum = 0;
    let oddSum = 0;

    number.toString().split('').forEach(num => {
        num = Number(num);
        num % 2 == 0 ? evenSum += num : oddSum += num;
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);