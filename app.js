// Import functions and chalk npm
import { extractEmails, extractPhoneNumbers } from "./utils.js";

import chalk from "chalk";

// Create "messy" data for functions to clean
const messyData = `If you have any questions, feel free to contact me! My work email is incharge@businesscompany.com, and my personal email is squidward@bikinibottom.com. You can also reach me by phone at (555)666-7789, or after business hours at 444-333-2210.`

console.log(chalk.bgBlueBright("Email:"));
console.log(extractEmails(messyData));

console.log(chalk.bgYellowBright("Phone:"));
console.log(extractPhoneNumbers(messyData));