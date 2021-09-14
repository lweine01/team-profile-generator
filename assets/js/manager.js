const Employee = require("../assets/js/employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
  }
    getOffice = () => this.office;
  
    getRole = () => "Manager";
  
  }
  
  module.exports = Manager;