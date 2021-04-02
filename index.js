// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// const createMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "manname",
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
    
])
.then((answers) => {
    console.log(answers)

    // check if choices are engineer or intern call like functions, if not then go to HTML file generation. 
        // IF "Engineer" is selected as job, THEN prompted questions are generated. Once questions are answered, the series is directed back to 
        // the "job" checkbox question.
        // IF "intern" is selected as job, THEN prompted questions are generated. Once questions are answered, the series is directed back to 
        // the "job" checkbox question.
        // IF "I don't want to add any more team members." is selected, 
    // THEN the HTML file is generated with the results.
})

const engineerQuestions = function(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "engineername",
        },
        {
            type: "input",
            message: "What is the team Engineer's id?",
            name: "engineerid",
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub username?",
            name: "engineergithub",
        },
        {
            type: "checkbox",
            message: "What type of team member would you like to add?",
            name: "job",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],
        },
    ])
}
const internQuestions = function (){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern’s name?",
            name: "internname",
        },
        {
            type: "input",
            message: "What is the team Intern’s id?",
            name: "internid",
        },
        {
            type: "input",
            message: "What is the team Intern’s email?",
            name: "internemail",
        },
        {
            type: "input",
            message: "Where does the Intern go to school?",
            name: "internschool",
        },
        {
            type: "checkbox",
            message: "What type of team member would you like to add?",
            name: "job",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],
        },
    ])
}
function ()  {
    if (job == "Engineer"){
        return function(engineerQuestions);
    }else if(job == "Intern"){
        return function(internQuestions);
    }else(job === "I don't want to add any more team members.")
        return console.log(answers);
}