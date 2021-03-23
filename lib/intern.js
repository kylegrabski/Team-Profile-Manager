/*
Extends the employee class:
school
getSchool()
getRole() overridden to return 'Intern'
*/

const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }

    getRole(){
        console.log(this.role)
        return this.role;
    }
}

module.exports = Intern;