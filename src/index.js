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
    const chunk = (s, n) => s.split("").reduce((r, e, i, a) => (i % n ? r : [...r, a.slice(i, i + n)]), []).map(e => e.join(""));
    return chunk(expr, 10).map(e => chunk(e, 2).map(b => ({[00]:"",[10]:".",[11]:"-"})[b]).join("")).map(e => MORSE_TABLE[e] ?? " ").join("");
}

module.exports = {
    decode
}

/* chunk() implementation below is faster and easier to be read
function chunk(string, n) {
    const out = [];
    for (let i = 0; i < string.length; i += n) {
      out.push(string.slice(i, i + n));
    }
    return out;
} */