function solve(number) {
    let numberAsStringArr = number.toString().split('');
    let areSame = true;
    let sum = 0;

    for (const digit of numberAsStringArr) {
        let firstDigit = numberAsStringArr[0];

        if (firstDigit !== digit) {
            areSame = false;
        }

        sum += Number(digit);
    }

    console.log(areSame);
    console.log(sum);    
}

solve(2222222);
solve(1234);