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
          let tdAssets = document.createElement('td');
          tdAssets.innerHTML = id;
          
          trAssets.appendChild(tdAssets);

          let sensors = response[assets]["sensors"];
          let tdSensors = document.createElement('td');
          tdSensors.innerHTML = sensors;
          trAssets.appendChild(tdSensors);

          let model = response[assets]["model"];
          let tdModel = document.createElement('td');
          tdModel.innerHTML = model;
          trAssets.appendChild(tdModel);

          let status = response[assets]["status"];
          let tdStatus = document.createElement('td');
          tdStatus.innerHTML = status;
          trAssets.appendChild(tdStatus);
          if (status == "inOperation") {
            tdStatus.classList.add("inOperation");
          } else if (status == "inDowntime") {
            tdStatus.classList.add("inDowntime");
          } else if (status == "inAlert") {
            tdStatus.classList.add("inAlert");
          }

          let healthScore = response[assets]["healthScore"];
          let headerHealthScore = document.createElement('td');
          headerHealthScore.innerHTML = healthScore;
          trAssets.appendChild(headerHealthScore);

          let name = response[assets]["name"];
          let tdName = document.createElement('td');
          tdName.innerHTML = name;
          trAssets.appendChild(tdName);

          let imageLink = response[assets]["image"];
          let rowImage = document.createElement('td');
          let tagImage = document.createElement('img');
          tagImage.setAttribute("src", imageLink);
          tagImage.classList.add("img-thumbnail");
          rowImage.appendChild(tagImage);
          trAssets.appendChild(rowImage);

          let specifications = response[assets]["specifications"];
          let tdSpecifications = document.createElement('td');
          let iconSpecifications = document.createElement('i');
          tdSpecifications.innerHTML = `<i class="far fa-eye"></i>`;
          trAssets.appendChild(tdSpecifications);


          let metrics = response[assets]["metrics"];
          let tdMetrics = document.createElement('td');
          let iconMetrics = document.createElement('i');
          iconMetrics.classList.add("far","fa-eye", "popover-dismiss");
          iconMetrics.setAttribute("tabIndex","0");
          iconMetrics.setAttribute("id","eye");
          iconMetrics.setAttribute("data-toggle","popover");
          iconMetrics.setAttribute("data-trigger","focus");
          iconMetrics.setAttribute("data-content","abc");
          trAssets.appendChild(tdMetrics);


          let unitId = response[assets]["unitId"];
          let tdUnitId = document.createElement('td');
          tdUnitId.innerHTML = unitId;
          trAssets.appendChild(tdUnitId);

          let companyId = response[assets]["companyId"];
          let tdCompanyID = document.createElement('td');
          tdCompanyID.innerHTML = companyId;
          trAssets.appendChild(tdCompanyID);

          let btnEdit = document.createElement("button");
          let tdActions = document.createElement('td');
          btnEdit.classList.add ("btn", "btn-warning");
          const texto = document.createTextNode("Edit");
          btnDelete.appendChild(texto);
          tdActions.innerHTML = btnDelete.value;
          tdActions.appendChild(btnDelete);

          let btnDelete = document.createElement("button");
          let tdActions = document.createElement('td');
          btnDelete.classList.add ("btn", "btn-danger");
          const texto = document.createTextNode("Delete");
          btnDelete.appendChild(texto);
          tdActions.innerHTML = btnDelete.value;
          tdActions.appendChild(btnDelete);

          trAssets.appendChild(tdActions);

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