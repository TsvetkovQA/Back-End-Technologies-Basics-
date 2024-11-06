function solve([speed, area]) {
    let speedLimit;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    let difference = speedLimit - speed;

    if (difference >= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (Math.abs(difference) <= 20) {
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    } else if (Math.abs(difference) <= 40) {
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
    } else {
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);