// api url
const api_url2 = 
      "https://beakon-employee.herokuapp.com/employees";
  
// Defining async function
async function getapi(api_url2) {
    
    // Storing response
    const responseOne = await fetch(api_url2);
    
    // Storing data in form of JSON
    var dataOne = await responseOne.json();
    console.log(dataOne);
    // if (response) {
    //     hideloader();
    // }
    showChart(dataOne);
}
// Calling that async function
getapi("https://beakon-employee.herokuapp.com/employees");
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showChart(dataOne) {
    let tab = 
        `<tr>
            <th>Last Name</th>
            <th>First Name</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of dataOne) {

        if(r.vacStatus == true)
        {
            tab += `<tr> 
                <td>${r.lastName}</td> 
                <td>${r.firstName}</td> 
            </tr>`;
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("chartOneData").innerHTML = tab;
}
