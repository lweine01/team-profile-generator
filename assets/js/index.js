const Employee = require("./employee");
const Manager = require("./manager");
const Intern = require("./intern");
const Engineer = require("./engineer");
const Inquirer = require("inquirer");
const fs = require('fs');
const inquirer = require("inquirer");

const teamMembers = [];

managerPrompts();

managerPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers ID number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email address?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the managers office room number?'
        }
    ]).then(function(response) {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        teamMembers.push(manager)
        newMember();
    });
}

newMember = () => {
    inquirer.prompt([
        {
            input: 'rawList',
            name: 'position',
            message: 'What position would you like to add to team?',
            choices: ['Intern', 'Engineer', 'Hiring Completed']
        }
    ]).then(function(response){
        if(response.position === 'Intern'){
            internPrompts();
        } else if(response.position === 'Engineer') {
            engineerPrompts();
        } else {
            generateMarkdown();
        }
    });
}

engineerPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineers ID number?'
        },
        {
            type: 'input',
            name: 'engineeerEmail',
            message: 'What is the engineers email address?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineers GitHub username?'
        }
    ]).then(function(response) {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.gitHub);
        teamMembers.push(engineer);
        newMember();
    });
}

internPromts = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?'
        }
    ]).then(function(response) {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        teamMembers.push(intern);
        newMember();
    });
}