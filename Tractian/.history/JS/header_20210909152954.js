const navbar = document.createElement('template');
navbar.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Tractian</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="users.html">Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="assets.html">Assets</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="units.html">Units</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="companies.html">Companies</a>
      </li>
    </ul>
  </div>
</nav>
`
document.body.appendChild(navbar.content);

let css = document.createElement('template');
css.innerHTML = `    
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
`
document.head.appendChild(css.content);


// scripts.innerHTML = `<script src="" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
// <script src=../JS/popover.js>
// `

let footer = document.querySelector('footer');

let scriptJquery = document.createElement('script');
scriptJquery.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js"
footer.appendChild(scriptJquery);

let integrityJquery = document.createElement('integrity');
integrityJquery.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js"
footer.appendChild(scriptJquery);


var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = '../favicon tractian.png';
document.getElementsByTagName('head')[0].appendChild(link);

