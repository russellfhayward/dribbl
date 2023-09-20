import express from 'express';

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('assets'));

app.get('/home', (req, res) => {
    console.log('are we here');
    res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});