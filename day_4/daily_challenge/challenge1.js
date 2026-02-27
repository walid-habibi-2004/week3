// ============> Exercice 1 date 1
// date.js

function timeUntilJanuaryFirst() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextJanuary = new Date(currentYear, 0, 1);

    if (now > nextJanuary) {
        nextJanuary = new Date(currentYear + 1, 0, 1);
    }

    const difference = nextJanuary - now;

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} days and ${hours}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} hours`;
}

module.exports = { timeUntilJanuaryFirst };

// script.js

const { timeUntilJanuaryFirst } = require("./date");

const result = timeUntilJanuaryFirst();

console.log(`January 1st is in ${result}`);

// ==========> Exercice 2 date 2

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


