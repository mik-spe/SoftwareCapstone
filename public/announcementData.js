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
            <th>First Name</th>    
            <th>Last Name</th>
            <th>Email</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {

        if(r.infected == true){


            tab += `<tr> 
            <td>${r.firstName}</td> 
            <td>${r.lastName}</td>     
            <td>${r.email}</td> 
            </tr>`;
        }
               // tab += `<tr> 
               // <td>${r.firstName}</td> 
               // <td>${r.lastName}</td>     
               // <td>${r.email}</td> 
               // </tr>`;
        
      
    }

    

    
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}