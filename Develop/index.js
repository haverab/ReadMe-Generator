const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api.js");
const markdown = require("./utils/generateMarkdown.js");

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
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "The Unlicense"
        ]
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


//license 
then(response => {

    var fileNameReadMe = "README.md";
    var fileNameLicense = "LICENSE.txt";
    var license = response.License
    // variables to be used to dynamically add year and fullname
    // var year = response.Year;
    // var fullName = response.FullName;

    // Check to determine which license file to create
    if (license === 'MIT License') {

        var licenseName = fs.readFileSync(`./utils/${license}.txt`);
        writeLicense(fileNameLicense, licenseName)

    } else if (license === 'Apache License 2.0') {

        var licenseName = fs.readFileSync(`./utils/${license}.txt`);
        writeLicense(fileNameLicense, licenseName)

    } else if (license === 'GNU General Public License v3.0') {

        var licenseName = fs.readFileSync(`./utils/${license}.txt`);
        writeLicense(fileNameLicense, licenseName)

    } else if (license === 'Creative Commons Zero v1.0 Universal') {

        var licenseName = fs.readFileSync(`./utils/${license}.txt`);
        writeLicense(fileNameLicense, licenseName)

    } else if (license === 'Eclipse Public License 2.0') {

        var licenseName = fs.readFileSync(`./utils/${license}.txt`);
        writeLicense(fileNameLicense, licenseName)

    } else if (license === 'The Unlicense') {

        var licenseName = fs.readFileSync(`./utils/${license}.txt`);
        writeLicense(fileNameLicense, licenseName)

    }

    var readme = generateMarkdown(response);

    writeReadMe(fileNameReadMe, readme);

});



// function to write README file
function writeReadMe(fileNameReadMe, readme) {

    fs.writeFile(`./your_files/${fileNameReadMe}/`, readme, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

}



// function to write LICENSE file
function writeLicense(fileNameLicense, licenseName) {

    fs.writeFile(`./your_files/${fileNameLicense}`, licenseName, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });


}

async function verifyOverwrite(fileName) {
    return inquirer.prompt([{
      type: "confirm",
      name: "confirmOverwrite",
      message: fileName + " exists. Overwrite?"
    }]);
  }
  
  async function writeToFile(filename, answers) {
    let writeOkay = true;
  
    if (fs.existsSync(filename)) {
      writeOkay = await verifyOverwrite(filename);
    };
  
    if (writeOkay) {
      if (writeFileAsync(filename, markdown.generateMarkdown(answers, api), (error) => {
        console.log('Unable to create readme file at this time. \n', error);
      })) {
        console.log('Created ', filename);
      }
    }
  };
  
  async function init() {
    console.log("\n *** Welcome to the README Generator *** \n");
    try {
      const answers = await inquirer.prompt(questions);
      await api.getUserInfo(answers.userName.trim())
      .finally(() => {
        const readme = `./readme/README-${answers.repoName.trim()}.md`;
        writeToFile(readme, answers);
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  

// function call to initialize program
init();
