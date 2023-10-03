import express from 'express';
//import { randomBytes } from 'crypto';

const app = express();
const PORT = 9000;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

/*
routes:

get:
 /
 /getCredentials -- get users session
 /getWordList -- get list of words
 /getRoom -- looks for avail room to put you into
 /
post:
 /postCredentials -- creates user credentials in db
put:
delete:
 /deleteCredentials -- if session is expired .. delete cred & make new
*/

// const corsOptions = {
//     origin: '*', // allows all origins for testing purposes
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   };
  
app.use(cors());

// Middleware to parse all requests
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/home', (req, res) => {
    console.log('home route');
    res.send('Hello, TypeScript with Express awegndd!');
});

app.get('/getCredentials', (req, res) => {
    console.log('getCredentials route');
    res.send(200);
});

app.get('/getWordList', (req, res) => {
    console.log('getWordList route');
    res.send(200);
});

app.get('/getRoom', (req, res) => {
    console.log('getRoom route');
    res.send(200);
});

app.post('/postCredentials', (req, res) => {
    console.log('postCredentials route');
    console.log('reqbody', req.body);
    res.json({ message: 'Data received!' });
});

let data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

app.delete('/deleteCredentials/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10); // Convert the ID to an integer
    data = data.filter(item => item.id !== itemId); // Remove the item from the array
    res.json({ message: `Item with ID: ${itemId} has been deleted.` });
    console.log('data', data);
  });

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});