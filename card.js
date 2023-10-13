import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:k3lson.victor@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

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
            "        Hi there! I'm Harsh, I'm a passionate MERN stack " 
        )}`,
        `${chalk.bold("        developer and web designer from India, and have a ")}`,
        `${chalk.bold(
            "        hobby for creating beautiful, cool, and responsive "
        )}`,
        `${chalk.bold(
            "        web apps. Toss me an email if you want to collab!"
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

prompt(questions).then(answer => answer.action());