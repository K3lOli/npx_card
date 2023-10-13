#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const data = {
    name: chalk.bold.green("                     Kelson Victor"),
    handle: chalk.white("@kelsonvictor"),
    github: chalk.hex('#787878')("https://github.com/K3lOli"),
    linkedin: chalk.hex('#330093')("https://www.linkedin.com/in/kelson-victor/"),
    website: chalk.hex('#00AB9E')("https://kelsonvictor-omega-umber.vercel.app/"),
    npx: chalk.hex('#A1AB00')("npx kelsonvictor"),

    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelLinkedin: chalk.hex('#A959FF').bold("       Linkedin:"),
    labelDribbble: chalk.hex('#F259FF').bold("       Dribbble:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "        My inbox is always open, Whether you have a " 
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);