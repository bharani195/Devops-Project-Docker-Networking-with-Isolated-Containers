fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('data').innerText = data.message;
    })
    .catch(err => console.error('Error:', err));

// Fetch and display extra content
fetch('/api/extra')
    .then(response => response.json())
    .then(data => {
        document.getElementById('extra-message').innerText = data.extraMessage;
    })
    .catch(err => console.error('Error fetching extra content:', err));
