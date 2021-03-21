/*
require
{
    inquirer
    fs
    employee
    manager
    engineer
    intern
    write to HTML/Dynamically Create Html?
}

prompts
*/
// required npm
const { prompt } = require('inquirer');
const fs = require('fs');

// required classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
function init(){
    prompt(managerQuestions)
    .then(data => {
        console.log(data)
        prompt(menu)
        .then(data => {
            console.log(data)
        })
    })
    // askQuestions()
}


// ask questions logic
function askQuestions(){
    prompt()
    .then(data => {
        console.log(data);
    })
}

// call function to initilaize app
init();
    
