// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
                name: 'title',
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
                choices: ['Apache', 'GNU', 'MIT', 'Boost'],
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
}

// TODO: Create a function to write README file
function writeToFile(content) {
    fs.writeFile('./README.md', content, function(err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Data succesfully written');
        }
    })  
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(data => {
            console.log(data);
            const readMeContent = generateMarkdown.generateMarkdown(data);
            writeToFile(readMeContent);
        })
}

// Function call to initialize app
init();
