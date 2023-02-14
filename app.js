const inquirer = require('inquirer');
// Questions for README
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Project title : "
    },
    {
        type: "input",
        name: "Description",
        message: "Description of Project : "
    },
    {
        type: "input",
        name: "Installation",
        message: "Installation of Instructions : "
    },
    {
        type: "List",
        name: "License",
        message: "License : ",
        Choices: ['MIT', 'ISC', 'GNULv3'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: "input",
        name: "Usage",
        message: "Project Use : "
    },
    {
        type: "input",
        name: "Contribution",
        message: "Contributors : "
    },
    {
        type: "input",
        name: "Tests",
        message: "Description of Test : "
    },
    {
        type: "input",
        name: "Email",
        message: "For questions (e-mail) : "
    }

]

// Code to run Query Function

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers)
        return answers
    })
    .catch((error)=> {
        console.log(error)
    })
}

runQuery()