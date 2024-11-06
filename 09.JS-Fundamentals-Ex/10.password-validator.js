function solve(password) {
    let message = [];
    if (password.length < 6 || password.length > 10) {
        message.push('Password must be between 6 and 10 characters');
    }

    if (!isAlphanumeric(password)) {
        message.push('Password must consist only of letters and digits');
    }

    if (!hasAtLeastTwoDigits(password)) {
        message.push('Password must have at least 2 digits');
    }

    if (message.length === 0) {
        console.log('Password is valid');
    } else {
        console.log(message.join('\n'));
    }

    function isAlphanumeric(password) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(password);
    }

    function hasAtLeastTwoDigits(password) {
        const digits = password.split('').filter(char => {
            return char >= '0' && char <= '9';
        })

        return digits.length >= 2;
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');