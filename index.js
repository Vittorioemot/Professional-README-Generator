// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description about the project.',
        name: 'description'
    },
    {
        type: 'list',
        message: 'Choose the license for your project?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'ISC', 'IBM']
    }
];

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(function (data) {
        console.log(data);

        console.log(data.title);
        console.log(data.description);
        console.log(data.license);
    })

}

// Function call to initialize app
init();