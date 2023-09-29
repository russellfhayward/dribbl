import express from 'express';

const app = express();
const PORT = 9000;
const path = require('path');

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/home', (req, res) => {
    console.log('are we here');
    res.send('Hello, TypeScript with Express awegndd!');
});

app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});