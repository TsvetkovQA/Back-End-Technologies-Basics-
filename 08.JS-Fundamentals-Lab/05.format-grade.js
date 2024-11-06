function solve(grade) {
    let description;

    if (grade < 3.00) {
        description = 'Fail';
    } else if (grade >= 3.00 && grade < 3.50) {
        description = 'Poor';
    } else if (grade >= 3.50 && grade < 4.50) {
        description = 'Good';
    } else if (grade >= 4.50 && grade < 5.50) {
        description = 'Very good';
    } else if (grade >= 5.50) {
        description = 'Excellent';
    }

    if (description !== 'Fail') {
        console.log(`${description} (${grade.toFixed(2)})`);
    } else {
        console.log('Fail (2)');        
    }
}

solve(3.33);
solve(4.50);
solve(2.99);