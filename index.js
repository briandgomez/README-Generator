// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'project',
                message: "What is your project's name?",
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project',
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['Apache','GNU','MIT','Boost'],
            },
            {
                type: 'input',
                name: 'dependency',
                message: 'What command should be run to install dependencies?',
                default: 'npm install',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?',
                default: 'npm test',
            },
            {
                type: 'input',
                name: 'disclaimer',
                message: 'What does the user need to know about using the repo?'

            },
            {
                type: 'input',
                name: 'contribution',
                message: 'What does the user need to know about contributing to the repo?'
            },
        ])
        .then(function (answer) {
            console.log(answer);
        })
}

questions();
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
