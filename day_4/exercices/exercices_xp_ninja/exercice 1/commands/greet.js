import chalk from "chalk";

export function greet(name) {
    const message = `
${chalk.blue("🥷 Welcome,")} ${chalk.green.bold(name)}!
${chalk.yellow("Your ninja utility is ready to serve you!")}
`;
    console.log(message);
}
