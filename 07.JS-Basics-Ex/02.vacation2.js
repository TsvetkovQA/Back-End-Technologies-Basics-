function solve(arr) {
    people = parseInt(arr[0]);
    type = arr[1];
    day = arr[2];
    let price;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            break;
    }

    let totalPrice = people * price;

    if (people >= 30 && type === 'Students') {
        totalPrice -= 0.15 * totalPrice;
    } else if (people >= 100 && type === 'Business') {
        totalPrice = (people - 10) * price;
    } else if ((people >= 10 && people <= 20) && type === 'Regular') {
        totalPrice -= 0.05 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)} `);
}

solve([30, "Students", "Sunday"]);
solve([40, "Regular", "Saturday"]);