#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
//conditional statement
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You have guessed the correct number.");
}
else {
    console.log("Oops!You have guessed the wrong number.");
}
