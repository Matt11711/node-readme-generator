// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
        
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this software? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter usage instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the names of the contributors!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'testing',
        message: 'What instructions do you have for testing the software?',
     
      },
      {
        type: 'list',
        name: 'license',
        message: 'How would you like to license your software?',
        choices: ['AGPL v3', 'GPL v3', 'LGPL v3', 'MPL 2.0', 'Apache_2.0', 'MIT', 'Boost_1.0', 'Unlicense']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      }];


const dummyData = 
    {
        title: 'generator',
        description: 'a generator',
        installation: 'dfdfd',
        usage: 'type things',
        contributors: 'me',
        testing: 'none',
        license: 'AGPL v3',
        github: 'matt',
        email: 'sdsd'
      }



// TODO: Create a function to write README file
function writeToFile( data) {
    fs.writeFile('./src/README.md',generateMarkdown(data),err => {
        if (err) {
            console.log(err);
            return false
        }
        console.log('README successfully created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data)=> writeToFile(data))
}
// function init(data) {
//     console.log(generateMarkdown(data))
// }

// console.log(dummyData)
// Function call to initialize app
init(dummyData);
