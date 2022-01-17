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
function decode(message, key) {
    message = message.toUpperCase();
    var decoded = '';
    for (var i = 0; i < message.length; i++) {
        var currentLetter = message[i];
        var currentCode = letter_to_number[currentLetter];
        if (currentCode || currentCode === 0) {
            var newCode = mod(currentCode + key, alphabet.length);
            decoded += number_to_letter[newCode];
        }
        else {
            decoded += currentLetter;
        }
    }
    return decoded;
}
function encode(message, key) {
    return decode(message, -key);
}
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
//# sourceMappingURL=decoder.js.map