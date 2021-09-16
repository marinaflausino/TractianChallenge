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
      
      for(const user in response) {
            let trUser = document.createElement('tr');
            table.appendChild(trUser);

            let id = response[user]["id"];
            let headerId = document.createElement('td');
            headerId.innerHTML = id;
            trUser.appendChild(headerId);

            let email = response[user]["email"];
            let headerEmail = document.createElement('td');
            headerEmail.innerHTML = email;
            trUser.appendChild(headerEmail);

            let name = response[user]["name"];
            let headerName = document.createElement('td');
            headerName.innerHTML = name;
            trUser.appendChild(headerName);

            let unitId = response[user]["unitId"];
            let headerUnitId = document.createElement('td');
            headerUnitId.innerHTML = unitId;
            trUser.appendChild(headerUnitId);

            let companyId = response[user]["companyId"];
            let headerCompanyID = document.createElement('td');
            headerCompanyID.innerHTML = companyId;
            trUser.appendChild(headerCompanyID);
      }
}

fetch('https://my-json-server.typicode.com/tractian/fake-api/users')
      .then(response => { response.json()
            .then(data => showData(data)) })
      .catch(error => console.log('error' + error))