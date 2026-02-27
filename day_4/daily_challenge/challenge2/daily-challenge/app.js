// app.js
const { greet } = require("./greeting");
const { showMessage } = require("./colorful-message");
const { readFileContent } = require("./read-file");

const task = process.argv[2];

switch (task) {
    case "greet":
        console.log(greet("Walid"));
        break;
    case "color":
        showMessage();
        break;
    case "read":
        readFileContent();
        break;
    default:
        console.log(`
Usage: node app.js <task>

Tasks:
  greet   → Show greeting message
  color   → Show colorful message
  read    → Read and display file content
        `);
}
