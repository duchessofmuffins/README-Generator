// the introduction of different modules
const fs = require ('fs');
const inquirer = require('inquirer');

// this is a connection to the document generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown')

// JSON for where the info can be changed depending on the project
const questions = [
 {
    //  github username
     type: 'input',
     name: 'github',
     message: 'What is your Github Username?'
 },
 {
    //  email
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
 },
 {
    //  title of project the README is for
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
 {
    // description of project README is for
    type: 'input',
    name: 'description',
    message: 'Describe your project here'
},

// ---- COMMENTED OUT for later work ----
//  {
    //  licensure that the project has
//     type: 'list',
//     name: 'license',
//     message: 'What kind of licensure should your project have?',
//     choices: ['MIT', 'APACHE 2.0', 'GPK 3.0', 'BSD 3', 'None']
// },
{
    // installation instructions for the project
    type: 'input',
    name: 'installation',
    message: 'What commands should be run to install dependencies?',
    default: 'npm i'
},
{
    //  commands used in order to run testing
    type: 'input',
    name: 'test',
    message: 'What commands should be run to test this program?',
    default: 'node index.js'
},
{
    // people who contributed to the program in question
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?'
}
];

// function to write the actual README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
    });
    console.log('README.md created!')
}

// function to initialize the program in question using inquirer to create a CLI
function init() {
    inquirer.prompt(questions).then((answer) => {
        // this is the console.log indicating the README actually being written/generated
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...answer}));
    })
}

// function call to initialize program
init();
