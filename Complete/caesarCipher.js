function caesarCipher(string, shift = 1) {
    let alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let shifted = Array.from(string);
    let encrypted = [];

    shifted.forEach((character) => {
        if (alphabetUpper.includes(character)) {
            let index = alphabetUpper.indexOf(character);
            index += shift;
            if (index > 25) { index -= 26 }
            encrypted.push(alphabetUpper[index]);
        } else if (alphabetLower.includes(character)) {
            let index = alphabetLower.indexOf(character);
            index += shift;
            if (index > 25) { index -= 26 }
            encrypted.push(alphabetLower[index]);}
        else { encrypted.push(character) }
    })
    return encrypted.join("");
}

export default caesarCipher;