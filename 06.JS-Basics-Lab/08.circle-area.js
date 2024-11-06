function solve(input) {
    console.log(typeof input === 'number' ? (Math.PI * input * input).toFixed(2) : `We can not calculate the circle area, because we received a ${typeof input}.`);
}

solve(5);
solve('name');