// api url
const api_url3 = 
      "https://beakon-employee.herokuapp.com/employees";
  
// Defining async function
async function getapi(api_url3) {
    
    // Storing response
    const responseTwo = await fetch(api_url3);
    
    // Storing data in form of JSON
    var dataTwo = await responseTwo.json();
    console.log(dataTwo);
    // if (response) {
    //     hideloader();
    // }
    showChart2(dataTwo);
}
// Calling that async function
getapi("https://beakon-employee.herokuapp.com/employees");
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showChart2(dataTwo) {
    let tab = 
        `<tr>
            <th>Last Name</th>
            <th>First Name</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of dataTwo) {

        if(r.inQuarantine == true)
        {
            tab += `<tr> 
                <td>${r.lastName}</td> 
                <td>${r.firstName}</td> 
            </tr>`;
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("chartTwoData").innerHTML = tab;
}
