const managerData = require('../index.js')
const engineerData = require('../index.js')
const internData = require('../index.js')

const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

let employee1 = new Manager(managerData[0].name, managerData[0].id, managerData[0].email, managerData[0].officeNumber);

console.log(managerData)
console.log(employee1)
const generateCards = (managerData, engineerData, internData) =>{



}

