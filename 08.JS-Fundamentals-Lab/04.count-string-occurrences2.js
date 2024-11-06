function solve(text, word) {
    // let counter = 0;
    let regex = new RegExp(`\\b${word}\\b`, 'g');
    let matches = text.match(regex);
    let occurrencies = matches ? matches.length : 0;

    console.log(occurrencies);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');