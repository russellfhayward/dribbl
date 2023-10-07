import express from 'express';
import http from 'http';
import cors from 'cors';
import  path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin:'*',
        methods : ['GET', 'POST'], 
    }
})
const bodyParser = require('body-parser');

const corsOptions = {
    origin: '*', // or an array of allowed origins
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Serve static files from the 'dist' directory
app.use(express.static('dist'));
// Middleware to parse all requests
app.use(bodyParser.json());
app.use('/api/v1/getCredentials', (req,res) => {
    
})
const PORT = 9000;


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

  // Socket.io events
io.on('connection', (socket) => {
      // Emit the testEvent immediately after a client connects
      socket.emit('testEvent', 'Hello from server');
      socket.on('clientMessage', (data) => {
        console.log('message from client: ', data);
      });
    console.log('a user connected');
    // Listen for the event when the button is clicked
    socket.on('joinGame', () => {
      console.log('Button clicked, joining game room');
      
      // Here you can have your logic for creating or assigning a game room
      const roomId = 'someUniqueRoomId';
      
      socket.join(roomId);
      
      // Notify the user they have joined the room
      io.to(roomId).emit('joinedRoom', roomId);
    });
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});