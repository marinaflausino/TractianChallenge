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
    
    for(const units in response) {
          let trUnits = document.createElement('tr');
          table.appendChild(trUnits);

          let id = response[units]["id"];
          let headerId = document.createElement('td');
          headerId.innerHTML = id;
          trUnits.appendChild(headerId);

          let name = response[units]["name"];
          let headerName = document.createElement('td');
          headerName.innerHTML = name;
          trUnits.appendChild(headerName);

          let companyId = response[units]["companyId"];
          let headerCompanyId = document.createElement('td');
          headerCompanyId.innerHTML = companyId;
          trUnits.appendChild(headerCompanyId);
        }
}

fetch('https://my-json-server.typicode.com/tractian/fake-api/units')
    .then(response => { response.json()
          .then(data => showData(data)) })
    .catch(error => console.log("error"+ error))