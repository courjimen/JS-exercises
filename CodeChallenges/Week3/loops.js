/* Complete the vowelsAndConsonants function in the editor below.

vowelsAndConsonants has the following parameters:

string s: the string to process
*/

function vowelsAndConsonants (str) {
// create arrays print each vowel IN ORDER
let vowels = [];
let consonants = [];
// called each character of the string to match a vowel
for (let char of str) {
    if(char==='a' || char==='e' ||char==='i' || char==='o' || char==='u') {
    vowels.push(char);
    } else {
        consonants.push(char);
    }
}

for (let vowel of vowels) {
    console.log(vowel);
}

for (let consonant of consonants) {
    console.log(consonant);
}
}
vowelsAndConsonants("javascriptloops");
