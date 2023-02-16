const inquirer = require('inquirer');
const fs = require("fs")
const MarkDown = require('./lib/ReadMeGen')
// Questions for README
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title : "
    },
    {
        type: "input",
        name: "description",
        message: "Description of Project : "
    },
    {
        type: "input",
        name: "installation",
        message: "Installation of Instructions : "
    },
    {
        type: "list",
        name: "license",
        message: "license",
        choices:['mit', 'isc', 'gnpulv3'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Project Use : "
    },
    {
        type: "input",
        name: "contribution",
        message: "Contributors : "
    },
    {
        type: "input",
        name: "tests",
        message: "Description of Test : "
    },
    {
        type: "input",
        name: "questions",
        message: "For questions (e-mail) : "
    }

]

// Code to run Query Function

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if(err) {
                console.log('Could not save file', err)
            } else {
                console.log("success: new README.md file generated inside the current folder")
            }
        })

    })
    .catch((error)=> {
        console.log(error)
    })
}

runQuery()