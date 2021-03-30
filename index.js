// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// const createMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =
    inquirer.prompt([
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


            switch ("checkbox") {
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
                        },
                    ])
                    break;
            }
        })
const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid style = color:purple;">My Team</div>
  <div class="container">
    <h1 class="display-4">${answers.name}</h1>
    <p class="lead">ID: ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</body>
</html>`;