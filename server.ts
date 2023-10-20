import express, { Request, Response } from 'express';
import session from 'express-session';
import {createClient} from 'redis';
import RedisStore from 'connect-redis';
import http from 'http';
import cors from 'cors';
import path from 'path';

import { Server } from 'socket.io';
import bodyParser from 'body-parser';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

// Redis Client creation && Session-Redis connection
const redisClient = createClient();
redisClient.connect().catch(console.error)
const redisStore = new RedisStore({ client: redisClient, prefix: "dribbl:" });

const PORT = 9000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(
  session({
    store: redisStore,
    secret: 'keyboard', // Choose a strong secret
    resave: false, // Don't resave the session if unmodified
    saveUninitialized: true, // Don't create session until something is stored
    cookie: { maxAge: 2592000000, secure: false }  // Set cookie expiration to 30 days (in milliseconds)
  })
);

// Routes
app.get('/', (req: Request, res: Response) => {

    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.delete('/deleteCredentials/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10); 
    // ... rest of the logic
    res.json({ message: `Item with ID: ${itemId} has been deleted.` });
});

  // Socket.io events
io.on('connection', (socket) => { 

  console.log('a user connected');

  socket.on('message', (msg) => {
    console.log(msg);
    io.emit('message',msg);
  })

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
