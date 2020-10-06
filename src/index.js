const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let currentWord = '',
        result = '',
        counter = 1;

    expr.split('').forEach(ch => {
        if(currentWord.length > 0 || ch != '0') currentWord += ch; // Skip left zeroes

        if (counter == 10) {
            // Decode to Morse code
            currentWord = currentWord.split('10').join('.');
            currentWord = currentWord.split('11').join('-');
            currentWord = currentWord.replace('**********', ' ');

            // Decode from Morse code
            result += ((currentWord != ' ') ? MORSE_TABLE[currentWord]: ' ');
            
            currentWord = '';
            counter = 0;
        }
        counter ++;
    });

    return result;

}

module.exports = {
    decode
}
