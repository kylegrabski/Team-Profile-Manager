/*
class will have:
name
id
email
getName()
getId()
getEmail()
getRole() - returns 'Employee'
*/

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
    return this.name;
    };

    getId(){
    return this.id;
    };

    getEmail(){
    return this.email
    };

    getRole(){console.log(' Employee ')
    return 'Employee'
    }
};

module.exports = Employee;