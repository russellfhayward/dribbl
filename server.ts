import express from 'express';
//import { randomBytes } from 'crypto';

const app = express();
const PORT = 9000;
const path = require('path');
const cors = require('cors');

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

// Serve static files from the 'dist' directory

// Enable All CORS Requests
//app.use(cors());

// app.use((req, res, next) => {
//     // Generate a nonce
//     const nonce = randomBytes(16).toString('base64');
  
//     // Set the CSP header, including the nonce for style-src
//     res.header(
//       'Content-Security-Policy',
//       `default-src 'none'; style-src 'nonce-${nonce}';`
//     );
  
//     // Make the nonce available to views
//     res.locals.nonce = nonce;
//     next();
//   });

const corsOptions = {
    origin: 'https://localhost:9000', // or an array of allowed origins
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(cors(corsOptions));

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/home', (req, res) => {
    console.log('are we here');
    res.send('Hello, TypeScript with Express awegndd!');
});

app.get('getCredentials', (req, res) => {
    console.log('are we here');
    res.send(200);
});

app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});