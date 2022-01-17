
let letter_to_number: { [key: string]: number; } = {}
let number_to_letter: { [key: number]: string; } = {}

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ._';

for (let i = 0; i < alphabet.length; i++) {
  letter_to_number[alphabet[i]] = i;
  number_to_letter[i] = alphabet[i];
}

function mod(n: number, p: number): number {
    if ( n < 0 )
        n = p - Math.abs(n) % p;
    return n % p;
}

function decode(message: string, key: number): string {
  message = message.toUpperCase();
  let decoded: string = '';
  for (let i = 0; i < message.length; i++) {
    let currentLetter: string = message[i];
    let currentCode: number = letter_to_number[currentLetter];
    if (currentCode || currentCode === 0) {
      let newCode = mod(currentCode + key, alphabet.length);
      decoded += number_to_letter[newCode];
    } else {
      decoded += currentLetter;
    }
  }
  return decoded;
}

function encode(message: string, key: number): string {
  return decode(message, -key);
}

let grape   = 'H'.charCodeAt(0) - 'A'.charCodeAt(0);
let wine    = 'B'.charCodeAt(0) - 'A'.charCodeAt(0);
let chai    = 'T'.charCodeAt(0) - 'A'.charCodeAt(0);
let challah = 'P'.charCodeAt(0) - 'A'.charCodeAt(0);
let bee     = 'L'.charCodeAt(0) - 'A'.charCodeAt(0);

let grape_text = "🍇"
let wine_text ="🍷"
let chia_text = "חַי "
let challah_text ="🥖"
let bee_text = "🐝"



