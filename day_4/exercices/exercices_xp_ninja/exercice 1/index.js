#!/usr/bin/env node
import { Command } from "commander";
import { greet } from "./commands/greet.js";
import { fetchData } from "./commands/fetch.js";
import { readFile } from "./commands/read.js";

const program = new Command();

program
    .name("ninja-utility")
    .description("A powerful ninja CLI utility 🥷")
    .version("1.0.0");

program
    .command("greet <name>")
    .description("Display a colorful greeting")
    .action((name) => {
        greet(name);
    });


program
    .command("fetch")
    .description("Fetch data from a public API")
    .action(() => {
        fetchData();
    });

program
    .command("read <file>")
    .description("Read and display file content")
    .action((file) => {
        readFile(file);
    });

program.parse(process.argv);
