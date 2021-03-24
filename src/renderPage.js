function renderPage(team) {
  let employees = "";
  for (let i = 0; i < team.length; i++) {
    if (team[i].role === "Manager") {
      employees += `
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${team[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${team[i].role}</h6>
          <a href="mailto:${team[i].email}" class="card-link">Email: ${team[i].email}</a>
          <br>
          <p class="card-text">Office #: ${team[i].officeNumber}</p>
        </div>
      </div>
    </div>`;

    }
     else if (team[i].role === "Engineer") {
      employees += `


    <div class="col-sm">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${team[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${team[i].role}</h6>
          <a href="mailto:${team[i].email}" class="card-link">Email: ${team[i].email}</a>
          <br>
          <a href="https://github.com/${team[i].github}" target="_blank"  class="card-link">GitHub: ${team[i].github}</a>
        </div>
      </div>
    </div>`;

    } else {
      employees += `
    <div class="col-sm">
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${team[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${team[i].role}</h6>
            <a href="mailto:${team[i].email}" class="card-link">Email: ${team[i].email}</a>
            <br>
            <p class="card-text">School ${team[i].school}</p>
          </div>
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Team Building Profile</title>
</head>
<body>

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">
    <img src="https://img.icons8.com/plasticine/50/000000/work.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Team Profile
  </a>
</nav>

<div class="container">
  <div class="row">
    ${employees}
  </div>
</div>    
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>
`;

  return page;
}

module.exports = renderPage;
