function shop(products = []) {
    const productsCount = Number(products[0]);
    const productsArr = products.slice(1, productsCount + 1);
    const commands = products.slice(productsCount + 1);

    // const [productsCount, ...rest] = products; // Destructure the first element and rest
    // const n = Number(productsCount);
    // const productsArr = rest.slice(0, n); // Extract the product names
    // const commands = rest.slice(n); // Remaining commands

    for (const command of commands) {
        if (command === 'End') {
            break;
        } else if (command === 'Sell') {
            console.log(`${productsArr.shift()} product sold!`);
        } else if (command.startsWith('Add')) {
            const productName = command.split(' ')[1];
            if (productName) {
                productsArr.push(productName);
            }
        } else if (command.startsWith('Swap')) {
            const startIndex = Number(command.split(' ')[1]);
            const endIndex = Number(command.split(' ')[2]);
            // const[startIndex, endIndex] = command.split(' ').slice(1).map(Number);

            if ([startIndex, endIndex].every(index => index >= 0 && index < productsArr.length)) {
                [productsArr[startIndex], productsArr[endIndex]] = [productsArr[endIndex], productsArr[startIndex]];
                console.log('Swapped!');
            }
        } else {
            continue;
        }
    }

    if (productsArr.length > 0) {
        console.log(`Products left: ${productsArr.join(', ')}`);
    } else {
        console.log('The shop is empty');
    }
}



// shop(['3', 'Apple', 'Banana', 'Orange', 'Sell', 'End', 'Swap 0 1']);
// shop(['5', 'Milk', 'Eggs', 'Bread', 'Cheese', 'Butter', 'Add Yogurt', 'Swap 1 4', 'End']);
shop(['3', 'Shampoo', 'Soap', 'Toothpaste', 'Sell', 'Sell', 'Sell', 'End']);