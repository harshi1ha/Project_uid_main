document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const fromStation = urlParams.get('from');
    const toStation = urlParams.get('to');

    if (fromStation && toStation) {
        fetchTrains(fromStation, toStation).then(trains => {
            displayResults(trains);
        }).catch(error => {
            displayError(error);
        });
    } else {
        displayError('Invalid search parameters');
    }
});

function fetchTrains(from, to) {
    return new Promise((resolve, reject) => {
        // Example data with additional fields
        const train = [
            { from: 'Kayamkulam', to: 'Secunderabad', name: 'SABARI EXP', time1: '8:35 AM',time2:'12:30 PM',trainNumber:17229 },
            { from: 'Yesvantapur', to: 'Coimbatore', name: 'Kochuveli EXP', time1: '12:00 PM',time2:'12:30 PM',trainNumber:16315},
            { from: 'Delhi', to: 'Kanyakumari', name: 'Himsagar EXP', time: '02:00 PM',time2:'12:30 PM',trainNumber:16318},
            { from: 'Vishakapatnam', to: 'Kollam', name: 'Thiruvananthapuram central SF', time1: '02:20 PM',time2:'12:30 PM',trainNumber:22642 },
            { from: 'Vishakapatnam', to: 'Kollam', name: 'Kollam weekly EXP', time1: '07:20 PM',time2:'12:30 PM',trainNumber:18567 },
            { from: 'Vishakapatnam', to: 'Kollam', name: 'TGurudev SF', time1: '6:00 PM',time2:'12:30 PM',trainNumber:12660 },
            { from: 'Yesvantapur', to: 'Coimbatore', name: 'Kannur EXP', time1: '08:20 PM',time2:'12:30 PM',trainNumber:16527 },
            { from: 'Yesvantapur', to: 'Kollam', name: 'Cape EXP', time1: '8:10 PM',time2:'12:30 PM',trainNumber:16526 },
            { from: 'Secunderabad', to: 'yesvantapur', name: 'Garib Rath EXP', time1: '04:15 PM',time2:'12:30 PM', trainNumber:12736},
            
        ];

        const results = train.filter(train => 
            train.from.toLowerCase() === from.toLowerCase() && 
            train.to.toLowerCase() === to.toLowerCase()
        );

        setTimeout(() => {
            if (results.length > 0) {
                resolve(results);
            } else {
                reject('No trains found');
            }
        }, 1000); // Simulate network delay
    });
}

function displayResults(train) {
    const resultsTableBody = document.getElementById('results');
    resultsTableBody.innerHTML = '';

    if (train.length === 0) {
        resultsTableBody.innerHTML = '<tr><td colspan="4">No trains found</td></tr>';
    } else {
        train.forEach((train,index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${train.name}</td>
                            <td>${train.trainNumber}</td>
                            <td>${train.time1}</td>
                            <td>${train.time2}</td>
                            
                            <td><button onclick="bookTicket('${train.name}','${train.trainNumber}', '${train.time1}', '${train.time2}')">check</button>
                         </td>`;

                            
                             
            resultsTableBody.appendChild(row);
        });
    }
}



function bookTicket(trainName,trainNumber, departureTime,arrivalTime) {
    // Store the selected train details in sessionStorage
    sessionStorage.setItem('selectedTrain', JSON.stringify({ trainName,trainNumber, departureTime,arrivalTime}));
    
    // Redirect to the ticket booking page
    window.location.href = 'ticket.html';

}
// Fetch stored train data
const storedTrains = JSON.parse(localStorage.getItem('train')) || [];
if (storedTrains.length > 0) {
    displayResults(storedTrains);
}
else{displayError('Invalid search parameters');}
