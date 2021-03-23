function renderPage(team) {
  let employees = "";
  for (let i = 0; i < team.length; i++) {
    if (team[i].role === "Manager") {
      employees += `
            <div class="card employee-card" id="Manager">
                    <div class="card-header">
                        <h2 class="card-title">${team[i].name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${team[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                            <li class="list-group-item">Office Number: ${team[i].officeNumber} </a></li>                    
                            </ul>
                    </div>
                </div>`;
    } else if (team[i].role === "Engineer") {
      employees += `
        <div class="card employee-card" id="Engineer">
                <div class="card-header">
                    <h2 class="card-title">${team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                        <li class="list-group-item">Github: <a href="http://github.com/${team[i].github}" target="_blank">${team[i].github} </a></li>                    
                        </ul>
                </div>
            </div>`;
    } else if (team[i].role === "Intern") {
      employees += `
        <div class="card employee-card" id="Intern">
                <div class="card-header">
                    <h2 class="card-title">${team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                        <li class="list-group-item">Schoole: ${team[i].school} </a></li>                    
                        </ul>
                </div>
            </div>`;
    }
  }
  let page = `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${employees}
    
</body>
</html>
`;

  return page;
}

module.exports = renderPage;
