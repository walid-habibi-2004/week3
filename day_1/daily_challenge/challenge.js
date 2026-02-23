//1nd daily challenge

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === "string")) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Error: Not all items are strings!");
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("Error: Array length is not greater than 4!");
        }
    });
}

makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));


//2nd daily challenge

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Morse Translator</title>
// </head>

// <body>
//     <h1>Morse Code Translator</h1>
//     <div id="morseOutput"></div>
    

//     <script src="challenge.js"></script>
// </body>

// </html>

const morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`;

function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseJS = JSON.parse(morse.toLowerCase());
            if (Object.keys(morseJS).length === 0) {
                reject("Error: Morse object is empty");
            } else {
                resolve(morseJS);
            }
        } catch (err) {
            reject("Error parsing JSON");
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence:").toLowerCase();
        const morseArray = [];

        for (let char of userInput) {
            if (char === " ") {
                morseArray.push(" ");
            } else if (morseJS[char]) {
                morseArray.push(morseJS[char]);
            } else {
                reject(`Error: Character "${char}" not found in Morse dictionary`);
                return;
            }
        }
        resolve(morseArray);
    });
}

function joinWords(morseTranslation) {
    const outputDiv = document.getElementById("morseOutput");
    outputDiv.innerHTML = morseTranslation.join("<br>");
}

toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(err => alert(err));
