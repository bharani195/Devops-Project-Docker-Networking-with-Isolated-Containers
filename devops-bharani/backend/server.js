const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/api/extra', (req, res) => {
    res.json({ extraMessage: 'This is some extra content from the backend!' });
});

app.listen(5000, () => {
    console.log('Backend running on port 5000');
});
