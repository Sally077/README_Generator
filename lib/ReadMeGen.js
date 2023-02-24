class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            mit:'[![license: mit](https://img.shields.io/badge/MIT-License__for__MIT-yellowgreen)](https://opensource.org/license/mit/)',
            isc:'[![license: isc](https://img.shields.io/badge/isc-Licensed%20for%20isc-brightgreen)](https://opensource.org/license/isc-license-txt/)',
            gnpulv3:'[![license: gnpulv3](https://img.shields.io/badge/gnpulv3-Licensed%20for%20GNPUL%20v3-yellow)](https://www.gnu.org/licenses/)'
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            // issues displaying badges check that I have applied on sheilds io correctly 
            mit:'[license: mit](https://choosealicense.com/licenses/mit/)', 
            isc:'[license: isc](https://choosealicense.com/licenses/isc/)',
            gnpulv3:'[license: gnpulv3](https://choosealicense.com/licenses/lgpl-3.0/)'

        }
        return licenseLinks[license] //returns the function
    }

    static renderLicenseSection(license){
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license` //literal template to create strings
        } else {
            return ''
        }

    }
    

    static generateReadme(answers) {
        return `
#${answers.title}

 ${this.renderLicenseBadge(answers.license)}


#${this.renderLicenseSection(answers.license)} 
        
## Table of Content
- [Project Description](#Description)
- [Installation](#Installation)
- [License](#License)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Email)
- [Questions](#Github)



## Description
<a id="Description"></a>
${answers.description}

## Installation
<a id="Installation"></a>
${answers.installation}
        
## License
<a id="License"></a>
${this.renderLicenseSection(answers.license)}

## Usage
<a id="Usage"></a>
${answers.usage}

## Contribution
<a id="Contribution"></a>
${answers.contribution}


## Tests
<a id="Tests"></a>
${answers.tests}

## Email
<a id="Email"></a>
${answers.email}

## Github
<a id="Github"></a>
${answers.github}
    `
    }
}
//tells nodejs which parts of the code to export
module.exports = MarkDown