# <readme generator>

[![license: mit](https://img.shields.io/badge/MIT-License__for__MIT-yellowgreen)](https://opensource.org/license/mit/)

## Description
<a id="description"></a>

Working on node the assignment has asked that we produce the following for the scenario below:

To build a command line program that dynamically generates a professional readme file using node.js.
User Story - as a developer I want a file that can quickly help me to generate a professional readme file.

The command line needs to show the following prompts:

Questions about the following:
Title of my project
Description
Table of Contents
Installation 
Usage
License
Contributing
Tests
Questions

When the user answers the questions above the information is added to the sections of the README file. 
When the user enters their github username this is added to the readme as a link
When the user enters their e-mail address it goes to the e-mail address link entered
When the user clicks on the table of content it is fully functioning and goes to the subheaded area.
When a license from the dropdown options section is selected a badge is added at the top section of the readme.

## Improvements & Issues
<a id="improvements"></a>
I think that the project could be improved by adding the data into a webpage or a program to make a user interface that is more aesthetically pleasing. I could also look at adding other options in there like an image area so the user can importa an image screen shot of their current project. I also noticed that my tutor had text areas for the description and other headings and would have liked to have looked more into changing the data type in the app.js file.

I did want to create a program that when run will produce a new document file each time but when looking at the tutor's visual example in class it was clear that my project met the brief and when the data was entered it appended to the original md file. I felt that for this project it would be the best way to handle it practically but in future I would like to look at how to append to a new file and practice working through the documentation for file handling in node.

Having some experience of creating 'r' read, 'w' write and 'a' append files in python and attaching these to notepad and csv files I think that this experience has helped when creating files in node.


## Table of Contents

- [Description](#description)
- [Improvements](#improvements)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribution](#how-to-contribute)
- [Tests](#tests)

## Installation
<a id="installation"></a>

I have installed node.js and inquirer: ^8.0.0  - use npm start to initate the process and add data to the readme

## Usage
<a id="usage"></a>

My program can be used by other codes to automatically generate a readme file it will add prompts for the user to enter and answer questions about their project and will return this as a readme file.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:





## Credits
<a id="credits"></a>

There were no collaborators in this task.

I watched and followed the video below on how to install the node packages by Assistian
https://www.youtube.com/watch?v=9ZHzhHiBwqc

I looked at a git hub repo for the structure and an example of how to apply the code by JFisher396
https://github.com/jfisher396/readme-generator

I watched a video all about node as an introduction to the program from Programming with Mosh
https://www.youtube.com/watch?v=TlB_eWDSMt4

I looked at the node documentation for how to add docs from the file system
https://nodejs.org/docs/latest-v8.x/api/fs.html



## License
<a id="license"></a>

I have chosen a MIT license for this project


## Badges
<a id="badges"></a>

I now have 3 git hub badge acheivements pullshark x2 and YOLO and a quickdraw badge

## Features
<a id="features"></a>

My code has a choices feature in node that allows the user to choose a license and applies a badge image at the top with links to information about the main licenses.

## How to Contribute
<a id="contribution"></a>

N/A

## Tests
<a id="tests"></a>

The js code
<img src="/images/js_code.png">


The markdown 
<img src="/images/markdown_img.png">

Adding data in the command line
<img src="/images/implementation.png">

Saving to the readme

<img src="/images/filesaved.png">


The output after the code has been entered

<img src="/images/readmepreview.png">