// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const createMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerid",
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "phone",
        },
        {
            type: "checkbox",
            message: "What type of team member would you like to add?",
            name: "job",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],
        },

            switch("checkbox") {
            case "Engineer":
            inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "engusername",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "engusername"
        }
            break;)]}
    ])