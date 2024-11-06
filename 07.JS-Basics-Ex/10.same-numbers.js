function solve(number) {
    let sum = 0;
    let isTrue = true;
    let previousDigit;

    while (number > 0) {
        let currentDigit = number % 10;       

        if ((Math.floor(number / 10) % 10) == 0) {
            previousDigit = number;            
        } else {
            previousDigit = Math.floor(number / 10) % 10;
        }

        if (currentDigit !== previousDigit) {
            isTrue = false;
        }

        sum += currentDigit;
        number = Math.floor(number / 10);
    }

    console.log(isTrue);
    console.log(sum);
}

solve(2222222 );
solve(1234);