function solve(input) {
    input = Number(input);
    let result;

    if (input >= 0 && input <= 2) {
        result = 'baby';
    } else if (input >= 3 && input <= 13) {
        result = 'child';
    } else if (input >= 14 && input <= 19) {
        result = 'teenager';
    } else if (input >= 20 && input <= 65) {
        result = 'adult';
    } else if (input >= 66) {
        result = 'elder';
    } else {
        result = 'out of bounds';
    }

    console.log(result);    
}

solve(20);
solve(1);
solve(100);
solve(-1);