const { greet } = require("./greeting");
const { showMessage } = require("./colorful-message");
const { readFileContent } = require("./read-file");

console.log(greet("Walid"));

showMessage();

readFileContent();
