let message: string = "Hello World! How are you?";

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

function encode(message: string, key: number): string {
  message = message.toUpperCase();
  let encoded: string = '';
  for (let i = 0; i < message.length; i++) {
    let currentLetter: string = message[i];
    let currentCode: number = letter_to_number[currentLetter];
    if (currentCode || currentCode === 0) {
      let newCode = mod(currentCode + key, alphabet.length);
      encoded += number_to_letter[newCode];
    } else {
      encoded += currentLetter;
    }
  }
  return encoded;
}

function decode(message: string, key: number): string {
  return encode(message, -key);
}
console.log(message);
console.log(encode(message, 0));
console.log(decode(encode(message, 0), 0));

console.log(encode(message, 10));
console.log(decode(encode(message, 10), 10));

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


console.log(alphabet);

console.log(encode(alphabet, 0));
console.log(encode(alphabet, grape));
console.log(decode(encode(alphabet, grape), grape));

console.log(encode("MIKE LETS EAT AT THE USUAL PLACE AND TIME", grape));
console.log(decode(encode("MIKE LETS EAT AT THE USUAL PLACE AND TIME", grape), grape));
console.log("חַי ")
