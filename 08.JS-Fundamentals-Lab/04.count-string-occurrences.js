function solve(text, word) {
    let counter = 0;
    let stringAsArr = text.split(' ');
   
    for (const w of stringAsArr) {
        if (w === word) {
            counter++;
        }
    }
    console.log(counter);    
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');