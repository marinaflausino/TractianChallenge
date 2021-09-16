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


let footer = document.getelement('footer');

let scriptJquery = document.createElement('script');
scriptJquery.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js"
footer.appendChild(scriptJquery);

let popperJquery = document.createElement('script');
popperJquery.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
footer.appendChild(popperJquery);

let bootstrapJquery = document.createElement('script');
bootstrapJquery.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
footer.appendChild(bootstrapJquery);





var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = '../favicon tractian.png';
document.getElementsByTagName('head')[0].appendChild(link);

