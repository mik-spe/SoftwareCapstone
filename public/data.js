// api url
const api_url = 
      "https://beakon-employee.herokuapp.com/employees";
  
// Defining async function
async function getapi(api_url) {
    
    // Storing response
    const response = await fetch(api_url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    show(data);
}
// Calling that async function
getapi("https://beakon-employee.herokuapp.com/employees");
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
            <th>Vaccinated</th>
            <th>Infected</th>
            <th>Quarantine</th>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>work ID</th>
            <th>Positive Test Date</th>
            <th>Negative Test Date</th>
            <th>Vaccine Date</th>
            <th>Quarantine Date</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
            <td>${r.vacStatus}</td> 
            <td>${r.infected}</td>
            <td>${r.inQuarantine} </td>
            <td>${r._id}</td>
            <td>${r.lastName}</td> 
            <td>${r.firstName}</td>     
            <td>${r.email}</td> 
            <td>${r.workID}</td> 
            <td>${r.datePositiveTest}</td> 
            <td>${r.dateNegativeTest}</td>    
            <td>${r.dateOfVac}</td>  
            <td>${r.quarDate}</td> 
        </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}