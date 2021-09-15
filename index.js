const Employee = require("./assets/lib/employee");
const Manager = require("./assets/lib/manager");
const Intern = require("./assets/lib/intern");
const Engineer = require("./assets/lib/engineer");
const inquirer = require("inquirer");
const fs = require('fs');

const teamMembers = [];

managerPrompts();

function managerPrompts() {
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
    ]).then(function (response) {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        teamMembers.push(manager)
        newMember();
    });
}

function newMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'What position would you like to add to team?',
            choices: ['Intern', 'Engineer', 'Hiring Completed']
        }
    ]).then(function (response) {
        if (response.position === 'Intern') {
            internPrompts();
        } else if (response.position === 'Engineer') {
            engineerPrompts();
        } else {
            renderHtml();
        }
    });
}

function engineerPrompts() {
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
            name: 'engineerEmail',
            message: 'What is the engineers email address?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineers GitHub username?'
        }
    ]).then(function (response) {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.gitHub);
        teamMembers.push(engineer);
        newMember();
    });
}

function internPrompts() {
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
    ]).then(function (response) {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        teamMembers.push(intern);
        newMember();
    });
}

function generateHtml() {
    renderArr = [];

    const htmlStart = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    </head>
    
    <body class="row">
    
        <header class="jumbotron text-center bg-primary text-white font-weight-bold col-12">
            <h1 class="display-4">Team Profile</h1>
        </header>
    
        <main class="container justify-content-center row col-12">`;
    renderArr.push(htmlStart);

    for (let i = 0; i < teamMembers.length; i++) {
        let htmlMember = '';
        if (teamMembers[i].role === 'Manager') {
            htmlMember = `
        <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
            <div class="bg-success">
                <h5 class="card-title ml-4 mt-3 mb-3 text-white">${teamMembers[i].getName()}</h5>
                <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-mug-hot"></i> Manager</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${teamMembers[i].getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${teamMembers[i].getOffice()}</li>
                </ul>
            </div>
        </div>`
        } else if (teamMembers[i].role === 'Intern') {
            htmlMember = `
            <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
            <div class="bg-success">
                <h5 class="card-title ml-4 mt-3 mb-3 text-white">${teamMembers[i].getName()}</h5>
                <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-user-graduate"></i>  Intern</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${teamMembers[i].getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto: ${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>
                    <li class="list-group-item">School: ${teamMembers[i].getSchool()}</li>
                </ul>
            </div>
        </div>`
        } else {
            htmlMember = `
            <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
            <div class="bg-success">
                <h5 class="card-title ml-4 mt-3 mb-3 text-white">${teamMembers[i].getName()}</h5>
                <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-glasses"></i> Engineer</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${teamMembers[i].getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto: ${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href=https://github.com/${teamMembers[i].getGitHub()}>${teamMembers[i].getGitHub()}</a></li>
                </ul>
            </div>
        </div>`;
        }
        renderArr.push(htmlMember);
    }

    const htmlEnd = `</main>
        </body>
    </html>`;
    renderArr.push(htmlEnd);

    return renderArr.join('');
}

function renderHtml() {
    fs.writeFile('team.html', generateHtml(), 'utf-8', (err) => {
        err ? console.log(err) : console.log('File successfully created! Great Work.')
    });
}