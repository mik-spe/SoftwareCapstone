// api url
const api_url4 = 
      "https://beakon-employee.herokuapp.com/employees";
  
// Defining async function
async function getapi(api_url4) {
    
    // Storing response
    const responseThree = await fetch(api_url4);
    
    // Storing data in form of JSON
    var dataThree = await responseThree.json();
    console.log(dataThree);
    // if (response) {
    //     hideloader();
    // }
    showChart3(dataThree);
}
// Calling that async function
getapi("https://beakon-employee.herokuapp.com/employees");
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showChart3(dataThree) {
    let tab = 
        `<tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Work ID</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of dataThree) {

            tab += `<tr> 
                <td>${r.lastName}</td> 
                <td>${r.firstName}</td>
                <td>${r.workID}</td>
            </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("chartThreeData").innerHTML = tab;
}
