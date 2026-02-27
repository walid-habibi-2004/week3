// ==========> Exercice 1

// date.js

function minutesLived(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();

    const differenceInMs = now - birth;

    const minutes = Math.floor(differenceInMs / (1000 * 60));

    return minutes;
}

module.exports = { minutesLived };

// script.js

const { minutesLived } = require("./date");

// Hardcoded birthdate (YYYY-MM-DD)
const birthdate = "2000-01-01";

const result = minutesLived(birthdate);

console.log(`You have lived approximately ${result.toLocaleString()} minutes.`);

