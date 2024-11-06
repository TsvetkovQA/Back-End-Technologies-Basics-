function solve(templates, string) {
    const templatesArr = [...templates.split(', ')];

    for (const template of templatesArr) {
        const searchedWord = '*'.repeat(template.length);
        string = string.replace(searchedWord, template);
    }
    console.log(string);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');