function solve(input) {
    let phoneBook = {};
    for (const entry of input) {
        let pair = entry.split(' ');
        phoneBook[pair[0]] = pair[1];
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);        
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);