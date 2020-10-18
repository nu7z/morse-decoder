const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const obj = {};
    const arrExpr = [];
    const result = [];
    const keys = Object.keys(MORSE_TABLE);

    keys.forEach((key) => {
        let acc = '';
        let temp = '';
        for (let i = 0; i < key.length; i += 1) {
            acc += key[i] === '.' ? '10' : '11'
        }
        if (acc.length < 10) {
            const counter = 10 - acc.length;
            for (let i = 0; i < counter; i += 1) {
                temp += 0;
            }
            temp += acc;
        };
        !temp ? obj[acc] = MORSE_TABLE[key] : obj[temp] = MORSE_TABLE[key];
    });

    
    for (let i = 0; i < expr.length; i += 10) {
        arrExpr.push(expr.substring(i, i + 10))
    }

    arrExpr.forEach((tenElements) => {
        if (tenElements === `**********`) result.push(' ');
        else {
            result.push(obj[tenElements])
        }
    })
    
    return result.join('');
}

module.exports = {
    decode
}