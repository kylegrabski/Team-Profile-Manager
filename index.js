// required npm
const { prompt } = require("inquirer");
const fs = require("fs");

// required classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// required function to create HTML
const renderPage = require("./src/renderPage");

// empty array that new employees will be pushed into
const teamArr = [];

// prompts
const managerQuestions = [
  {
    type: "input",
    message: "Please enter the name of the manager: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter the managers employee ID number: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the managers email address: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the office number: ",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Please enter the name of the engineer: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter the engineers employee ID number: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the engineers email address: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub username: ",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Please enter the name of the intern: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter the interns employee ID number: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the interns email address: ",
    name: "email",
  },
  {
    type: "input",
    message:
      "Please enter the name of the school the intern is currently attending: ",
    name: "school",
  },
];

const menu = [
  {
    type: "list",
    message: "MENU",
    choices: ["ADD ENGINEER", "ADD INTERN", "FINISH BUILDING TEAM"],
    name: "menu",
  },
];

function askQuestions() {
  // ask manager questions
  prompt(managerQuestions).then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    teamArr.push(manager);
    return askMenu();
  });
}

async function askMenu() {
  try {
    const data = await prompt(menu);

    if (data.menu === "ADD ENGINEER") {
      addEngineer();
    } else if (data.menu === "ADD INTERN") {
      addIntern();
    } else {
      await createPage("./dist/team.html", renderPage(teamArr));
      console.log("....PAGE CREATED");
    }
  } catch (err) {
    console.log("ERROR AT askMenu");
  }
}

function addEngineer() {
  prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamArr.push(engineer);

    askMenu();
  });
}

function addIntern() {
  prompt(internQuestions).then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamArr.push(intern);
    askMenu();
  });
}

// call function to initilaize app
askQuestions();

async function createPage(fileName, data) {
  try {
    await fs.promises.writeFile(fileName, data);
  } catch (err) {
    console.log("ERROR in PROMISE LAND", err);
  }
}

module.exports = [teamArr];
