
let InvalidChars: string[] = [
    '<',
    '>',
    ':',
    '"',
    '/',
    '\\',
    '|',
    '?',
    '*',
]

const testForInvalidChar = function (word:string) {
    let found = false;
    InvalidChars.forEach(i=>{
        console.log(word.includes(i))
       if(word.includes(i)){
           found = true
       }
    });
    return !found;
}

export default testForInvalidChar;