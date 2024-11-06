function solve(num1, num2, num3) {
    const output = subtract(sum(num1, num2), num3);
    console.log(output);

    function sum(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }
}

solve(23, 6, 10);

