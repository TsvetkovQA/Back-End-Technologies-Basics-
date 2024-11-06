function solve(input) {
    number = Number(input[0]);
    let operations = input.slice(1);
    let operation;

    for (const element of operations) {
        operation = element;

        switch (operation) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = number + 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number -= 0.20 * number;
                break;
            }
            console.log(number);           
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);