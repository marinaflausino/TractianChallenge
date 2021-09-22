const showData = response => {
    let body = document.getElementsByTagName('body')[0]

    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet'; 
    document.head.appendChild(link); 
    link.href = '../CSS/assets.css'; 

    let table = document.createElement('table');
    table.classList.add("table");
    body.appendChild(table);

    let trHeaders = document.createElement('tr');
    trHeaders.classList.add("column");
    table.appendChild(trHeaders);
     
    let keys = Object.keys(response[0]);

    for(const key in keys) {
          let header = document.createElement('th');
          header.setAttribute("id", keys[key])
          header.innerHTML = keys[key];
          trHeaders.appendChild(header);
    }

    let header = document.createElement('th');
    header.setAttribute("id", "actions")
    header.innerHTML = "actions";
    trHeaders.appendChild(header);

    for(const assets in response) {
          let trAssets = document.createElement('tr');
          table.appendChild(trAssets);

          let id = response[assets]["id"];
          let headerAssets = document.createElement('td');
          headerAssets.innerHTML = id;
          
          trAssets.appendChild(headerAssets);

          let sensors = response[assets]["sensors"];
          let headerSensors = document.createElement('td');
          headerSensors.innerHTML = sensors;
          trAssets.appendChild(headerSensors);

          let model = response[assets]["model"];
          let headerModel = document.createElement('td');
          headerModel.innerHTML = model;
          trAssets.appendChild(headerModel);

          let status = response[assets]["status"];
          let headerStatus = document.createElement('td');
          headerStatus.innerHTML = status;
          trAssets.appendChild(headerStatus);
          if (status == "inOperation") {
            headerStatus.classList.add("inOperation");
          } else if (status == "inDowntime") {
            headerStatus.classList.add("inDowntime");
          } else if (status == "inAlert") {
            headerStatus.classList.add("inAlert");
          }

          let healthScore = response[assets]["healthScore"];
          let headerHealthScore = document.createElement('td');
          headerHealthScore.innerHTML = healthScore;
          trAssets.appendChild(headerHealthScore);

          let name = response[assets]["name"];
          let headerName = document.createElement('td');
          headerName.innerHTML = name;
          trAssets.appendChild(headerName);

          let imageLink = response[assets]["image"];
          let rowImage = document.createElement('td');
          let tagImage = document.createElement('img');
          tagImage.setAttribute("src", imageLink);
          tagImage.classList.add("img-thumbnail");
          rowImage.appendChild(tagImage);
          trAssets.appendChild(rowImage);

          let specifications = response[assets]["specifications"];
          let headerSpecifications = document.createElement('td');
          let iconSpecifications = document.createElement('i');
          headerSpecifications.innerHTML = `<i class="far fa-eye"></i>`;
          trAssets.appendChild(headerSpecifications);


          let metrics = response[assets]["metrics"];
          let headerMetrics = document.createElement('td');
          let iconMetrics = document.createElement('i');
          iconMetrics.classList.add("far","fa-eye", "popover-dismiss");
          iconMetrics.setAttribute("tabIndex","0");
          iconMetrics.setAttribute("id","eye");
          iconMetrics.setAttribute("data-toggle","popover");
          iconMetrics.setAttribute("data-trigger","focus");
          iconMetrics.setAttribute("data-content","abc");
          trAssets.appendChild(headerMetrics);


          let unitId = response[assets]["unitId"];
          let headerUnitId = document.createElement('td');
          headerUnitId.innerHTML = unitId;
          trAssets.appendChild(headerUnitId);

          let companyId = response[assets]["companyId"];
          let headerCompanyID = document.createElement('td');
          headerCompanyID.innerHTML = companyId;
          trAssets.appendChild(headerCompanyID);

          let btnEdit = document.createElement("button");
          let btnDelete = document.createElement("button");
          let headerActions = document.createElement('td');
          btnDelete.classList.add("btn btn-danger");
          headerCompanyID.innerHTML = companyId;
          trAssets.appendChild(headerCompanyID); 

         // let actions = document.createElement('td')
         // <button type="button" class="btn btn-dark">Add</button>;
         // <button type="button" class="btn btn-dark">Edit</button>;
         //<button type="button" class="btn btn-dark">Delete</button>;
          
      
        }


}

fetch('https://my-json-server.typicode.com/tractian/fake-api/assets')
    .then(response => { response.json()
      .then(data => showData(data)) })
    .catch(error => console.log("error"+ error))