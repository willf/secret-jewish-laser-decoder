var message = "Hello World! How are you?";
var letter_to_number = {};
var number_to_letter = {};
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ._';
for (var i = 0; i < alphabet.length; i++) {
    letter_to_number[alphabet[i]] = i;
    number_to_letter[i] = alphabet[i];
}
function mod(n, p) {
    if (n < 0)
        n = p - Math.abs(n) % p;
    return n % p;
}
function encode(message, key) {
    message = message.toUpperCase();
    var encoded = '';
    for (var i = 0; i < message.length; i++) {
        var currentLetter = message[i];
        var currentCode = letter_to_number[currentLetter];
        if (currentCode || currentCode === 0) {
            var newCode = mod(currentCode + key, alphabet.length);
            encoded += number_to_letter[newCode];
        }
        else {
            encoded += currentLetter;
        }
    }
    return encoded;
}
function decode(message, key) {
    return encode(message, -key);
}
console.log(message);
console.log(encode(message, 0));
console.log(decode(encode(message, 0), 0));
console.log(encode(message, 10));
console.log(decode(encode(message, 10), 10));
var grape = 'H'.charCodeAt(0) - 'A'.charCodeAt(0);
var wine = 'B'.charCodeAt(0) - 'A'.charCodeAt(0);
var chai = 'T'.charCodeAt(0) - 'A'.charCodeAt(0);
var challah = 'P'.charCodeAt(0) - 'A'.charCodeAt(0);
var bee = 'L'.charCodeAt(0) - 'A'.charCodeAt(0);
var grape_text = "🍇";
var wine_text = "🍷";
var chia_text = "חַי ";
var challah_text = "🥖";
var bee_text = "🐝";
console.log(alphabet);
console.log(encode(alphabet, 0));
console.log(encode(alphabet, grape));
console.log(decode(encode(alphabet, grape), grape));
console.log(encode("MIKE LETS EAT AT THE USUAL PLACE AND TIME", grape));
console.log(decode(encode("MIKE LETS EAT AT THE USUAL PLACE AND TIME", grape), grape));
console.log("חַי ");
//# sourceMappingURL=decoder.js.map