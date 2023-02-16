class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            mit:'[![License: MIT](https://img.shields.io/badge/MIT-Licensed%20for%20MIT-orange)]',
            isc:'[![License: isc](https://img.shields.io/badge/isc-Licensed%20for%20isc-brightgreen)]',
            gnuplv3:'[![License: lgpl v3](https://img.shields.io/badge/gnpulv3-Licensed%20for%20GNPUL%20v3-yellow)]'
        }
    }

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