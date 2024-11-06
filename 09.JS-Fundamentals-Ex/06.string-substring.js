// function solve(word, text) {
//     word = word.toLowerCase();
//     text = text.toLowerCase().split(' ');

//     for (let currentWord of text) {
//         if (currentWord === word) {
//             console.log(word);
//             return;
//         }
//     }

//     console.log(`${word} not found!`);
// }

function solve(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();

    const result = text.split(' ').includes(word);
    console.log(result ? `${word}` : `${word} not found!`);    
}

solve('javascript', 'JJJJJJJJJavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');
solve('1', 'JavaScript 1 is the best programming language');