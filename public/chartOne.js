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
            <th>Vaccinated</th>
            <th>Infected</th>
            <th>Quarantine</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let d of dataOne) {
        tab1 += `<tr> 
            <td>${r.vacStatus}</td> 
            <td>${r.infected}</td>
            <td>${r.inQuarantine} </td>
        </tr>`

        ;
    }
    // Setting innerHTML as tab variable
    document.getElementById("chartOne").innerHTML = tab;

    new Chart(document.getElementById("chartOne"), {
        "type": "bar",
        "data": {
            "labels": ["Vaccinated", "Infected", "Quarantine"],
            "datasets": [{
                "label": "Page Impressions",
                "data": tab1,
                "borderColor": "rgb(255, 99, 132)",
                "backgroundColor": "rgba(255, 99, 132, 0.2)"
            }]
        },
        "options": {
            "scales": {
                "yAxes": [{
                    "ticks": {
                        "beginAtZero": true
                    }
                }]
            }
        }
    });
}
