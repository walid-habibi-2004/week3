const chalk = require("chalk");

function showMessage() {
    console.log(
        chalk.blue("Welcome to the Daily Challenge!") +
        "\n" +
        chalk.green("Keep learning, keep building ") +
        "\n" +
        chalk.yellow.bold("You are doing great!")
    );
}

module.exports = { showMessage };
