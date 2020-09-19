const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "repoName",
        message: "What is your repository name?"
      },
      {
        type: "input",
        name: "projTitle",
        message: "What is your project title?",
      },
      {
        type: "input",
        name: "projDesc",
        message: "What is your project description?"
      },
      {
        type: "input",
        name: "projInstall",
        message: "What are your project's installation instructions?",
      },
      {
        type: "input",
        name: "projMods",
        message: "Enter your dependencies, separated by commas:",
      },
      {
        type: "input",
        name: "projUsage",
        message: "How do you use your project?"
      },
      {
        type: "input",
        name: "projLicense",
        message: "What type of license does your project have?",
      },
      {
        type: "input",
        name: "projContrib",
        message: "How would some contribute to your project?"
      },
      {
        type: "input",
        name: "projTests",
        message: "What are your project's tests?"
      }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
