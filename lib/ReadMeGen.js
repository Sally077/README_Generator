class MarkDown {
    static generateReadme(answers) {
        return `
#${answers.title}
        
## Table of Content
- [Project Description](#Description)
- [Installation](#Installation)
- [License](#License)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${answers.description}

## Installation
${answers.installation}
        
## License
${answers.license}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## Questions
${answers.questions}

`
}
}
module.exports = MarkDown