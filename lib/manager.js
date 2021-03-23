/*
Extends on employee class:
officeNumber
getRole() - overridden to return 'Manager'
*/

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getRole() {
    console.log(this.role);
    return this.role;
  }
}

module.exports = Manager;
