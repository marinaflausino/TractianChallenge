const template = document.createElement('template');
template.innerHTML = `
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
document.body.appendChild(template.content);

let head = document.query
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = '../favicon tractian.png';
document.getElementsByTagName('head')[0].appendChild(link);

