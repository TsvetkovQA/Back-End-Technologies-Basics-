function solve(text, word) {
    let regex = new RegExp(word, 'g');
    let result = text.replace(regex, '*'.repeat(word.length));
    console.log(result);    
}

solve('A small sentence small with some words', 'small');
solve('Find the hidden word', 'hidden');