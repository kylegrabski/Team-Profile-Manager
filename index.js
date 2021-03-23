/*
    write to HTML/Dynamically Create Html?
*/

// required npm
const { prompt } = require('inquirer');
const fs = require('fs');

// required classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// required function to create HTML
// const generateCards = require('./src/generateCards')

// empty arrays that new employees will be pushed into
const managerData = [];
const engineerData = [];
const internData = [];
const teamArr = [];



// prompts
const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter the name of the manager: ',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the managers employee ID number: ',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter the managers email address: ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter the office number: ',
        name: 'officeNumber'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Please enter the name of the engineer: ',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the engineers employee ID number: ',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter the engineers email address: ',
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the engineer's GitHub username: ",
        name: 'github'
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'Please enter the name of the intern: ',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the interns employee ID number: ',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter the interns email address: ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter the name of the school the intern is currently attending: ',
        name: 'school'
    },
];

const menu = [
    {
        type: 'list',
        message: 'MENU',
        choices: ["ADD ENGINEER", "ADD INTERN", "FINISH BUILDING TEAM"],
        name: 'menu'
    }
]


// initialize app
// const init = async () => {
//    await askQuestions()
//     console.log("FINISHED")
   
//     // bring in generateCards Module
//     // generateCards(managerData, engineerData, internData)
// }




function askQuestions(){
    // ask manager questions
    prompt(managerQuestions)
        .then(data => {
            managerData.push(data)
            return askMenu()                    
            
        })
}

function askMenu (){
    prompt(menu)
    .then(data => {
       
        if (data.menu === 'ADD ENGINEER'){
            addEngineer()
        }else if(data.menu === 'ADD INTERN'){
            addIntern()
        }
        else {
            createPage();
        }
        
    })
}

function addEngineer(){
    prompt(engineerQuestions)
    .then(data => {
        const engineer = new Engineer(data.name, data.id,data.email,data.github)
        teamArr.push(engineer)
       
        askMenu();
        // return data
    })
}


function addIntern(){
    prompt(internQuestions)
    .then(data => {

        internData.push(data)
        console.log(internData)
        askMenu();
        // return data
    })
}

// call function to initilaize app
askQuestions();



// @ToDo create this later
function createPage() {
    fs.writeFileSync('./dist/team.html', renderPage(team), 'UTF-8');
 }


/*  renderPage that takes in team array, 
first have empty string var to reset
go through for loop, checks index if manager/engineer/intern
and put corresponding data to card.
*/


// create HTML file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('....NEW HTML FILE CREATED');
    });
};

module.exports = [
    managerData,
    engineerData,
    internData
]






















// const managerPromise = new Promise ((resolve, reject) => {
//     const time = 0
//     if(time <0){
//     reject(new Error('Something went wrong with Manager Promise'))
//     }else {
//     resolve(prompt(managerQuestions))}
// });

// Promise.all(managerPromise)
//     .then((data) => {
//         console.log(data)
//     })


// ask questions logic
// function askQuestions(){
//     // ask manager questions
//     prompt(managerQuestions)
//     .then(data => {
//         console.log(data);
//         // go to menu
//         prompt(menu)
//         .then(data => {
//             console.log(data.menu);
//             // if user chooses engineer, ask engineer questions
//             if(data.menu === 'ADD ENGINEER'){
//                 prompt(engineerQuestions)
//                 .then(data => {
//                     console.log(data)
//                 })
//                 // if user chooses intern, ask intern questions
//             } else if (data.menu === 'ADD INTERN'){
//                 prompt(internQuestions)
//                 .then(data => {
//                     console.log(data)
//                 })
//             }else return
//         })
//     })

// }