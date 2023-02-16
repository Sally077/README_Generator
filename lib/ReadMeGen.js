class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            mit:'[![License: mit](https://img.shields.io/badge/MIT-Licensed%20for%20MIT-orange)](https://opensource.org/license/mit/)',
            isc:'[![License: isc](https://img.shields.io/badge/isc-Licensed%20for%20isc-brightgreen)](https://opensource.org/license/isc-license-txt/)',
            gnpulv3:'[![License: gnpulv3](https://img.shields.io/badge/gnpulv3-Licensed%20for%20GNPUL%20v3-yellow)](https://www.gnu.org/licenses/)'
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            // issues displaying badges check that I have applied on sheilds io correctly 
            mit:'[License: mit](https://choosealicense.com/licenses/mit/)', 
            isc:'[License: isc](https://choosealicense.com/licenses/isc/)',
            gnpulv3:'[License: gnpulv3](https://choosealicense.com/licenses/lgpl-3.0/)'

        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license){
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ''
        }

    }
    

    static generateReadme(answers) {
        return `
#${answers.title}

#${this.renderLicenseSection(answers.license)}
        
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
${this.renderLicenseLink(answers.license)}

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