function solve([fruit, weightInGrams, pricePerKilo]) {
    weightInGrams = Number(weightInGrams);
    pricePerKilo = Number(pricePerKilo);
    let money = pricePerKilo * (weightInGrams / 1000);
    console.log(`I need $${money.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);    
}

solve(['orange', 2500, 1.80]);
solve(['apple', 1563, 2.35]);