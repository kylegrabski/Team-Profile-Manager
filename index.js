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

// empty arrays that new employees will be pushed into
const managerData = [];
const engineerData = [];
const internData = [];


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

let start = true;
// initialize app
function init(){
    if (start === true){
    askQuestions().then(
    console.log("FINISH IT"));
}else{
    console.log(managerData)
}
    // bring in generateCards Module
    // generateCards(managerData, engineerData, internData)
}



function askQuestions(){
    // ask manager questions
    prompt(managerQuestions)
        .then(data => {
            managerData.push(data)
            console.log(managerData[0].name)
            console.log(managerData[0].id)
            console.log(managerData[0].email)
            console.log(managerData[0].officeNumber)
                return askMenu()                    
            
        })
}

function askMenu (){
    prompt(menu)
    .then(data => {
        console.log(data.menu)
        if (data.menu === 'ADD ENGINEER'){
            addEngineer()
        }else if(data.menu === 'ADD INTERN'){
            addIntern()
        }
        return data.menu
    })
}

function addEngineer(){
    prompt(engineerQuestions)
    .then(data => {
        console.log(data);
        engineerData.push(data)
        console.log(engineerData)
        askMenu();
        return data
    })
}


function addIntern(){
    prompt(internQuestions)
    .then(data => {
        console.log(data)
        internData.push(data)
        console.log(internData)
        askMenu();
        return data
    })
}

// call function to initilaize app
init();


// create HTML file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('....NEW HTML FILE CREATED');
    });
};






















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