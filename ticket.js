// ticket.js
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected train details from sessionStorage
    const selectedTrain = JSON.parse(sessionStorage.getItem('selectedTrain'));
    
    if (selectedTrain) {
        displayTicketDetails(selectedTrain);
    } else {
        // If no train details found, display an error message
        const ticketDetails = document.getElementById('ticketDetails');
        ticketDetails.innerText = 'No train details found.';
    }
});

function displayTicketDetails(selectedTrain) {
    const ticketDetails = document.getElementById('ticketDetails');
    ticketDetails.innerHTML = `
        <h2>Train Name: ${selectedTrain.trainName}</h2>
        <h3>Train Number:${selectedTrain.trainNumber}</h3>
        <p>Departure Time: ${selectedTrain.departureTime}</p>
        <p>Arrival Time: ${selectedTrain.arrivalTime}</p>`;
       
    
}


document.getElementById('generateButton1').addEventListener('click', function() {
    // Generate a random number between 0 and 100
    var randomNumber = Math.floor(Math.random() * 51);

    // Display the random number in the numberDisplay div
    document.getElementById('numberDisplay1').textContent ='seats available:'+  randomNumber;
});
document.getElementById('generateButton2').addEventListener('click', function() {
    // Generate a random number between 0 and 100
    var randomNumber = Math.floor(Math.random() * 51);

    // Display the random number in the numberDisplay div
    document.getElementById('numberDisplay2').textContent = 'seats available:'+  randomNumber;
});
document.getElementById('generateButton3').addEventListener('click', function() {
    // Generate a random number between 0 and 100
    var randomNumber = Math.floor(Math.random() * 51);

    // Display the random number in the numberDisplay div
    document.getElementById('numberDisplay3').textContent = 'seats available:'+  randomNumber;
});
document.getElementById('generateButton4').addEventListener('click', function() {
    // Generate a random number between 0 and 100
    var randomNumber = Math.floor(Math.random() * 51);

    // Display the random number in the numberDisplay div
    document.getElementById('numberDisplay4').textContent = 'seats available:'+  randomNumber;
});
document.getElementById('book').addEventListener('click', function() {   
    window.location.href = 'passenger.html';})