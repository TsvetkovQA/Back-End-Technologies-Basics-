function solve(arr) {
    people = parseInt(arr[0]);
    type = arr[1];
    day = arr[2];
    let price;
    let totalPrice;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }

            totalPrice = people * price;

            if (people >= 30) {
                totalPrice -= 0.15 * totalPrice;
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

            totalPrice = people * price;

            if (people >= 100) {
                totalPrice = (people - 10) * price;
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

            totalPrice = people * price;            

            if (people >= 10 && people <= 20) {
                totalPrice -= 0.05 * totalPrice;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)} `);
}

solve([30, "Students", "Sunday"]);
solve([40, "Regular", "Saturday"]);