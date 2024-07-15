const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../yoga-website-frontend')));

// Example API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
