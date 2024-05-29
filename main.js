// script.js
document.getElementById('train-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromStation = document.getElementById('from-station').value.trim();
    const toStation = document.getElementById('to-station').value.trim();

    // Redirect to results page with query parameters
    window.location.href = `my.html?from=${encodeURIComponent(fromStation)}&to=${encodeURIComponent(toStation)}`;
});
