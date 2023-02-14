class MarkDown {
    static generateReadme(answers) {
        return `
        #${answers.title}
        
        ## Table of Content
        -[Project Description](#Description)
        -[Installation](#Installation)
        -[License](#License)
        -[Usage](#Usage)
        -[Contribution](#Contribution)
        -[Tests](#Tests)
        -[Questions](#Questions)
        
        
        `
    }
}
module.exports = MarkDown