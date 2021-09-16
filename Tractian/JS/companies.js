const showData = response => {
    let body = document.getElementsByTagName('body')[0]

    let table = document.createElement('table');
    table.classList.add("table");
    body.appendChild(table);

    let trHeaders = document.createElement('tr');
    trHeaders.classList.add("column");
    table.appendChild(trHeaders)
     
    let keys = Object.keys(response[0]);

    for(const key in keys) {
          let header = document.createElement('th');
          header.innerHTML = keys[key];
          trHeaders.appendChild(header);
    }
    
    for(const companies in response) {
          let trCompanies = document.createElement('tr');
          table.appendChild(trCompanies);

          let id = response[companies]["id"];
          let headerId = document.createElement('td');
          headerId.innerHTML = id;
          trCompanies.appendChild(headerId);

          let name = response[companies]["name"];
          let headerName = document.createElement('td');
          headerName.innerHTML = name;
          trCompanies.appendChild(headerName);

        }
}

fetch('https://my-json-server.typicode.com/tractian/fake-api/companies')
    .then(response => { response.json()
          .then(data => showData(data)) })
    .catch(error => console.log("error"+ error))