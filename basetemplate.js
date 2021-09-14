const generateMember = (member) =>  {

    const createManager = (manager) => {
        return `
        <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
            <div class="bg-success">
                <h5 class="card-title ml-4 mt-3 mb-3 text-white">${manager.getName()}</h5>
                <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-mug-hot"></i> ${manager.getRole()}</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${manager.getId()}o</li>
                    <li class="list-group-item"> Email: <a href:"mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOffice()}</li>
                </ul>
            </div>
        </div>`

    }
    const membersHtml = [];
    membersHtml.push(member
        .filter(member => member.getRole() === 'Manager')
        .map(a => createManager(a))
        .join('')
        )
    
    
}

const html= (member) => {
    return `<!DOCTYPE html>
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
    <body>
    <main class="container justify-content-center row col-12">
    ${generateMember(member)}
    </main>
    </body>`
}

module.exports = html;